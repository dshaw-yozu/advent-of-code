import { parseInput } from "./part1";
import { exampleInput } from "./part1.test";
import { isRangeWithinAnotherRange, part2Solution } from "./part2";

const [ranges] = parseInput(exampleInput);

describe("part2", () => {
  describe("part2Solution", () => {
    it("should return count of fresh item ids", () => {
      expect(part2Solution(ranges)).toBe(14n);
    });
  });
});
