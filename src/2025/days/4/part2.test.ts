import { parseInput } from "./part1";
import { exampleInput } from "./part1.test";
import { part2Solution } from "./part2";

describe("part2", () => {
  describe("part2Solution", () => {
    it("should return sum of all invalid codes", () => {
      expect(part2Solution(parseInput(exampleInput))).toBe(43);
    });
  });
});
