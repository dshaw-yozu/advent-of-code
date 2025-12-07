import { coordToString } from "../../../utils/general";
import { parseInput, part1Solution, simulateTacyon } from "./part1";

export const exampleInput = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`;

const { matrix, width, height } = parseInput(exampleInput);

describe("day 7", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return matrix, height and width", () => {
      const result = parseInput(exampleInput);
      console.log(result.matrix);
      expect(result.matrix.get(coordToString([7, 0]))).toBe("S");
      expect(result.width).toBe(15);
      expect(result.height).toBe(16);
    });
  });

  describe("simularTacyon", () => {
    it("should return the final state of the simulation", () => {
      const { matrix, width, height } = parseInput(exampleInput);
      simulateTacyon(matrix, height, width);
      console.log(matrix);
      expect(matrix.get(coordToString([7, 1]))).toBe("|");
      expect(width).toBe(15);
      expect(height).toBe(16);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return number of beam splits", () => {
        expect(part1Solution(matrix, height, width)).toBe(21);
      });
    });
  });
});
