import { parseInput } from "./part1";
import { exampleInput } from "./part1.test";
import { getInvalidCodes, part2Solution } from "./part2";

describe("part2", () => {
  describe("isValidRange", () => {
    it("should return all invalid values", () => {
      expect(getInvalidCodes(11, 22)).toStrictEqual([11, 22]);
      expect(getInvalidCodes(95, 115)).toStrictEqual([99, 111]);
      expect(getInvalidCodes(998, 1012)).toStrictEqual([999, 1010]);
      expect(getInvalidCodes(1188511880, 1188511890)).toStrictEqual([
        1188511885,
      ]);
      expect(getInvalidCodes(222220, 222224)).toStrictEqual([222222]);
      expect(getInvalidCodes(1698522, 1698528)).toStrictEqual([]);

      expect(getInvalidCodes(446443, 446449)).toStrictEqual([446446]);
      expect(getInvalidCodes(38593856, 38593862)).toStrictEqual([38593859]);
      expect(getInvalidCodes(565653, 565659)).toStrictEqual([565656]);
      expect(getInvalidCodes(824824821, 824824827)).toStrictEqual([824824824]);
      expect(getInvalidCodes(2121212118, 2121212124)).toStrictEqual([
        2121212121,
      ]);
    });
  });

  describe("part2Solution", () => {
    it("should return sum of all invalid codes", () => {
      expect(part2Solution(parseInput(exampleInput))).toBe(4174379265);
    });
  });
});
