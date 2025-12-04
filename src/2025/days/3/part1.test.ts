import { getHighestJoltage, parseInput, part1Solution } from "./part1";

export const exampleInput = `987654321111111
811111111111119
234234234234278
818181911112111`;

describe("day 3", () => {
  describe("parseInput", () => {
    test("given the raw input text, should return ranges", () => {
      expect(parseInput(exampleInput)).toStrictEqual([
        "987654321111111",
        "811111111111119",
        "234234234234278",
        "818181911112111",
      ]);
    });
  });

  describe("part1", () => {
    describe("getHighestJoltage", () => {
      it("should return highest joltage", () => {
        expect(getHighestJoltage("987654321111111")).toBe(98);
        expect(getHighestJoltage("811111111111119")).toBe(89);
        expect(getHighestJoltage("234234234234278")).toBe(78);
        expect(getHighestJoltage("818181911112111")).toBe(92);
      });
    });

    describe("part1Solution", () => {
      it("should return sum of all highest joltages", () => {
        expect(part1Solution(parseInput(exampleInput))).toBe(357);
      });
    });
  });
});
