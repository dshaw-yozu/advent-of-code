import { parseInput, part1Solution, calculateArea, getAreas } from "./part1";

export const exampleInput = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`;

const coordinates = parseInput(exampleInput);

describe("day 8", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return list of 2d coordinates", () => {
      expect(
        parseInput(`7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`)
      ).toStrictEqual([
        [7, 1],
        [11, 1],
        [11, 7],
        [9, 7],
        [9, 5],
        [2, 5],
        [2, 3],
        [7, 3],
      ]);
    });
  });

  describe("calculateArea", () => {
    it("should return the number area", () => {
      expect(calculateArea([1, 1], [3, 3])).toBe(9);
      expect(calculateArea([1, 1], [5, 5])).toBe(25);
      expect(calculateArea([1, 16], [2, 5])).toBe(24);
    });

    it("should handle lines", () => {
      expect(calculateArea([1, 5], [1, 10])).toBe(6);
    });

    it("should return the same area if the corners are reversed", () => {
      expect(calculateArea([11, 1], [2, 5])).toBe(50);
      expect(calculateArea([2, 5], [11, 1])).toBe(50);
    });
  });

  describe("getAreas", () => {
    it("should return a list of area combinations, sorted with largests first", () => {
      expect(
        getAreas([
          [7, 1],
          [11, 1],
          [11, 7],
        ])
      ).toStrictEqual([
        ["11,7|7,1", 35],
        ["11,7|11,1", 7],
        ["11,1|7,1", 5],
      ]);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return 50 for example input", () => {
        expect(part1Solution(coordinates)).toBe(50);
      });
    });
  });
});
