import { doColumnSum, parseInput, part1Solution } from "./part1";

export const exampleInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `;

const lines = parseInput(exampleInput);

describe("day 6", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return rows of numbers and operations", () => {
      expect(parseInput(exampleInput)).toStrictEqual([
        [123, 328, 51, 64],
        [45, 64, 387, 23],
        [6, 98, 215, 314],
        ["*", "+", "*", "+"],
      ]);
    });
  });

  describe("doColumnSum", () => {
    it("should return items in columns combined by operator in last line", () => {
      expect(doColumnSum(lines, 0)).toBe(33210);
      expect(doColumnSum(lines, 1)).toBe(490);
      expect(doColumnSum(lines, 2)).toBe(4243455);
      expect(doColumnSum(lines, 3)).toBe(401);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return sum of all the sums", () => {
        expect(part1Solution(lines)).toBe(4277556);
      });
    });
  });
});
