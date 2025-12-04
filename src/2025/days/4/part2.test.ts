import { parseInput } from "./part1";
import { exampleInput } from "./part1.test";
import { part2Solution } from "./part2";

describe("part2", () => {
  describe("part2Solution", () => {
    it("should return sum of removed rolls", () => {
      expect(part2Solution(parseInput(exampleInput))[0]).toBe(43);
    });
  });
});
