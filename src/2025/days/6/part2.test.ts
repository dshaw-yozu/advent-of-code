import { exampleInput } from "./part1.test";
import { convertToCephalopodNumbers, part2Solution, parseInput } from "./part2";

const lines = parseInput(exampleInput);

describe("part2", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return rows of numbers and operations", () => {
      expect(parseInput(exampleInput)).toStrictEqual([
        ["123", "328", " 51", "64 "],
        [" 45", "64 ", "387", "23 "],
        ["  6", "98 ", "215", "314"],
        ["*", "+", "*", "+"],
      ]);
    });
  });
  describe("convertToCephalopodNumbers", () => {
    it("should convert correctly", () => {
      expect(convertToCephalopodNumbers(["123", " 45", "  6"])).toEqual([
        1, 24, 356,
      ]);

      expect(convertToCephalopodNumbers(["328", "64 ", "98 "])).toEqual([
        369, 248, 8,
      ]);
      expect(convertToCephalopodNumbers([" 51", "387", "215"])).toEqual([
        32, 581, 175,
      ]);
      expect(convertToCephalopodNumbers(["64 ", "23 ", "314"])).toEqual([
        623, 431, 4,
      ]);
    });
  });
  describe("part2Solution", () => {
    it("should return sum of all the cephalopod sums", () => {
      expect(part2Solution(lines)).toBe(3263827);
    });
  });
});
