import { getInvalidCodes, parseInput, part1Solution } from "./part1";

export const exampleInput = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`;

describe("day 2", () => {
  describe("parseInput", () => {
    test("given the raw input text, should return ranges", () => {
      expect(parseInput(exampleInput)).toStrictEqual([
        [11, 22],
        [95, 115],
        [998, 1012],
        [1188511880, 1188511890],
        [222220, 222224],
        [1698522, 1698528],
        [446443, 446449],
        [38593856, 38593862],
        [565653, 565659],
        [824824821, 824824827],
        [2121212118, 2121212124],
      ]);
    });
  });

  describe("part1", () => {
    describe("isValidRange", () => {
      it("should return all invalid values", () => {
        expect(getInvalidCodes(11, 22)).toStrictEqual([11, 22]);
        expect(getInvalidCodes(95, 115)).toStrictEqual([99]);
        expect(getInvalidCodes(998, 1012)).toStrictEqual([1010]);
        expect(getInvalidCodes(1698522, 1698528)).toStrictEqual([]);
      });
    });

    describe("part1Solution", () => {
      it("should return sum of all invalid ids", () => {
        expect(part1Solution(parseInput(exampleInput))).toBe(1227775554);
      });
    });
  });
});
