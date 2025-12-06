import {
  isProductFresh,
  isWithinRange,
  parseInput,
  part1Solution,
} from "./part1";

export const exampleInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

const [ranges, items] = parseInput(exampleInput);

describe("day 2", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return ranges and items", () => {
      expect(parseInput(exampleInput)).toStrictEqual([
        [
          [3, 5],
          [10, 14],
          [16, 20],
          [12, 18],
        ],
        [1, 5, 8, 11, 17, 32],
      ]);
    });
  });

  describe("isWithinRange", () => {
    it("should return true", () => {
      expect(isWithinRange(1, 1, 1)).toBe(true);
      expect(isWithinRange(1, 0, 2)).toBe(true);
      expect(isWithinRange(1, -1, 2)).toBe(true);
    });

    it("should return false", () => {
      expect(isWithinRange(2, 1, 1)).toBe(false);
      expect(isWithinRange(3, 0, 2)).toBe(false);
      expect(isWithinRange(3, -1, 2)).toBe(false);
    });
  });

  describe("isProductFresh", () => {
    it("should return true if product is within one of the ranges", () => {
      expect(isProductFresh(5, ranges)).toBe(true);
      expect(isProductFresh(11, ranges)).toBe(true);
      expect(isProductFresh(17, ranges)).toBe(true);
    });

    it("should return false if product is within not one of the ranges", () => {
      expect(isProductFresh(1, ranges)).toBe(false);
      expect(isProductFresh(8, ranges)).toBe(false);
      expect(isProductFresh(32, ranges)).toBe(false);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return sum of fresh items", () => {
        expect(part1Solution(items, ranges)).toBe(3);
      });
    });
  });
});
