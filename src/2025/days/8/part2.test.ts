import { parseInput } from "./part1";
import { exampleInput } from "./part1.test";
import { part2Solution } from "./part2";

const coordinates = parseInput(exampleInput);

describe("part2", () => {
  describe("part2Solution", () => {
    it("should return expected answer", () => {
      expect(part2Solution(coordinates)).toBe(25272);
    });
  });
});
