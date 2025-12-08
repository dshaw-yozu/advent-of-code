import { coordToString } from "../../../utils/general";
import {
  addToCircuit,
  connectJunctionBoxes,
  Coordinate3D,
  findDistances,
  inSameCircuit,
  parseInput,
  part1Solution,
} from "./part1";

export const exampleInput = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`;

const coordinates = parseInput(exampleInput);

describe("day 8", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return list of 3d coordinates", () => {
      expect(
        parseInput(`1,2,3
        4,5,6`)
      ).toStrictEqual([
        [1, 2, 3],
        [4, 5, 6],
      ]);
    });
  });

  describe("inSameCircuit", () => {
    it("should return true if items are in same circuit", () => {
      expect(inSameCircuit("a", "b", [["a", "x", "b"]])).toBe(true);
    });

    it("should return false if items are in same circuit", () => {
      expect(inSameCircuit("a", "y", [["a", "x", "b"]])).toBe(false);
    });

    it("should return false if items are in no circuit", () => {
      expect(inSameCircuit("a", "y", [["b"]])).toBe(false);
    });
  });

  describe("addToCircuit", () => {
    it("should add new circuit if its first", () => {
      expect(addToCircuit("a", "b", [])).toStrictEqual([["a", "b"]]);
    });

    it("should do nothing if items are in the same circuit already", () => {
      expect(addToCircuit("a", "b", [["a", "b", "c", "d"]])).toStrictEqual([
        ["a", "b", "c", "d"],
      ]);
    });
    it("should add new circuit if neither points are in existing circuit", () => {
      expect(addToCircuit("a", "b", [["x", "y"]])).toStrictEqual([
        ["x", "y"],
        ["a", "b"],
      ]);
    });

    it("should add extend existing circuit if new connection is linked", () => {
      expect(addToCircuit("a", "x", [["x", "y"]])).toStrictEqual([
        ["a", "x", "y"],
      ]);
    });

    it("should add join existing circuits if new connection is linked", () => {
      expect(
        addToCircuit("a", "y", [
          ["x", "y"],
          ["a", "b"],
        ])
      ).toStrictEqual([["a", "y", "x", "b"]]);
    });
  });

  describe("findDistances", () => {
    it("should return the correct distance between coordiates", () => {
      expect(
        findDistances([
          [1, 1, 1],
          [2, 2, 2],
          [3, 3, 3],
          [4, 4, 4],
        ])
      ).toStrictEqual([
        ["2,2,2|1,1,1", 1.7320508075688772],
        ["3,3,3|2,2,2", 1.7320508075688772],
        ["4,4,4|3,3,3", 1.7320508075688772],
        ["3,3,3|1,1,1", 3.4641016151377544],
        ["4,4,4|2,2,2", 3.4641016151377544],
        ["4,4,4|1,1,1", 5.196152422706632],
      ]);
    });
  });

  describe("connectJunctionBoxes", () => {
    const exampleData: Coordinate3D[] = [
      [1, 1, 1],
      [3, 3, 3],
      [6, 6, 6],
      [10, 10, 10],
      [11, 11, 11],
    ];

    it("should return list of circuits after 1 connection", () => {
      expect(connectJunctionBoxes(exampleData, 1)).toStrictEqual([
        ["11,11,11", "10,10,10"],
      ]);
    });

    it("should return list of circuits after 2 connections", () => {
      expect(connectJunctionBoxes(exampleData, 2)).toStrictEqual([
        ["11,11,11", "10,10,10"],
        ["3,3,3", "1,1,1"],
      ]);
    });

    it("should return list of circuits after 3 connections", () => {
      expect(connectJunctionBoxes(exampleData, 3)).toStrictEqual([
        ["11,11,11", "10,10,10"],
        ["6,6,6", "3,3,3", "1,1,1"],
      ]);
    });

    it("should return list of circuits after 4 connections", () => {
      expect(connectJunctionBoxes(exampleData, 4)).toStrictEqual([
        ["10,10,10", "6,6,6", "11,11,11", "3,3,3", "1,1,1"],
      ]);
    });

    it("should skip connection when items are in the same circuit", () => {
      expect(
        connectJunctionBoxes(
          [
            [162, 817, 812],
            [425, 690, 689],
            [431, 825, 988],
            [906, 360, 560],
            [805, 96, 715],
          ],
          3
        )
      ).toStrictEqual([]);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return 40 for example input", () => {
        expect(part1Solution(coordinates, 10)).toBe(40);
      });
    });
  });
});
