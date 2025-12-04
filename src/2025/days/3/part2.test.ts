import { parseInput } from "./part1";
import { exampleInput } from "./part1.test";
import {
  getBiggestXDigitNumber,
  getHighestJoltage,
  part2Solution,
} from "./part2";

describe("part1", () => {
  describe("getBiggestXDigitNumber", () => {
    it("should return the number if x is equal to its length", () => {
      expect(getBiggestXDigitNumber("1", 1)).toBe(1);
    });

    it("should return the biggest number as read left to right", () => {
      expect(getBiggestXDigitNumber("12", 1)).toBe(2);
      expect(getBiggestXDigitNumber("12", 1)).toBe(2);

      expect(getBiggestXDigitNumber("12", 1)).toBe(2);
    });
  });
  describe("getHighestJoltage", () => {
    it("should return highest joltage", () => {
      expect(getHighestJoltage("987654321111111")).toBe(987654321111);
      expect(getHighestJoltage("811111111111119")).toBe(811111111119);
      expect(getHighestJoltage("234234234234278")).toBe(434234234278);
      expect(getHighestJoltage("818181911112111")).toBe(888911112111);
    });
  });

  describe("part1Solution", () => {
    it("should return sum of all highest joltages", () => {
      expect(part2Solution(parseInput(exampleInput))).toBe(3121910778619);
    });
  });
});
