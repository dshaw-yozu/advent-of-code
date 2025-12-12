import { findAllPaths, parseInput, part1Solution } from "./part1";

export const exampleInput = `aaa: you hhh
you: bbb ccc
bbb: ddd eee
ccc: ddd eee fff
ddd: ggg
eee: out
fff: out
ggg: out
hhh: ccc fff iii
iii: out`;

const input = parseInput(exampleInput);

describe("day 11", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return input", () => {
      expect(parseInput(exampleInput)).toStrictEqual({
        aaa: ["you", "hhh"],
        bbb: ["ddd", "eee"],
        ccc: ["ddd", "eee", "fff"],
        ddd: ["ggg"],
        eee: ["out"],
        fff: ["out"],
        ggg: ["out"],
        hhh: ["ccc", "fff", "iii"],
        iii: ["out"],
        you: ["bbb", "ccc"],
      });
    });
  });

  describe("findPaths", () => {
    it("should return all paths", () => {
      expect(findAllPaths(input)).toStrictEqual([
        ["you", "bbb", "ddd", "ggg", "out"],
        ["you", "bbb", "eee", "out"],
        ["you", "ccc", "ddd", "ggg", "out"],
        ["you", "ccc", "eee", "out"],
        ["you", "ccc", "fff", "out"],
      ]);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return 5 for example input", () => {
        expect(part1Solution(input)).toBe(5);
      });
    });
  });
});
