import { parseInput, part1Solution, validatePossible } from "./part1";

export const exampleInput = `0:
###
##.
##.

1:
###
##.
.##

2:
.##
###
##.

3:
##.
###
##.

4:
###
#..
###

5:
###
.#.
###

4x4: 0 0 0 0 2 0
12x5: 1 0 1 0 2 2
12x5: 1 0 1 0 3 2`;

const input = parseInput(exampleInput);

describe("day 12", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return input", () => {
      expect(parseInput(exampleInput)).toStrictEqual({
        shapes: {
          "0": {
            area: 7,
            shape: {
              "0,0": "#",
              "1,0": "#",
              "2,0": "#",
              "0,1": "#",
              "1,1": "#",
              "2,1": ".",
              "0,2": "#",
              "1,2": "#",
              "2,2": ".",
            },
          },
          "1": {
            area: 7,
            shape: {
              "0,0": "#",
              "1,0": "#",
              "2,0": "#",
              "0,1": "#",
              "1,1": "#",
              "2,1": ".",
              "0,2": ".",
              "1,2": "#",
              "2,2": "#",
            },
          },
          "2": {
            area: 7,
            shape: {
              "0,0": ".",
              "1,0": "#",
              "2,0": "#",
              "0,1": "#",
              "1,1": "#",
              "2,1": "#",
              "0,2": "#",
              "1,2": "#",
              "2,2": ".",
            },
          },
          "3": {
            area: 7,
            shape: {
              "0,0": "#",
              "1,0": "#",
              "2,0": ".",
              "0,1": "#",
              "1,1": "#",
              "2,1": "#",
              "0,2": "#",
              "1,2": "#",
              "2,2": ".",
            },
          },
          "4": {
            area: 7,
            shape: {
              "0,0": "#",
              "1,0": "#",
              "2,0": "#",
              "0,1": "#",
              "1,1": ".",
              "2,1": ".",
              "0,2": "#",
              "1,2": "#",
              "2,2": "#",
            },
          },
          "5": {
            area: 7,
            shape: {
              "0,0": "#",
              "1,0": "#",
              "2,0": "#",
              "0,1": ".",
              "1,1": "#",
              "2,1": ".",
              "0,2": "#",
              "1,2": "#",
              "2,2": "#",
            },
          },
        },
        areas: [
          [
            [4, 4],
            [0, 0, 0, 0, 2, 0],
          ],
          [
            [12, 5],
            [1, 0, 1, 0, 2, 2],
          ],
          [
            [12, 5],
            [1, 0, 1, 0, 3, 2],
          ],
        ],
      });
    });
  });

  describe("validatePossible", () => {
    it("should return false if combined area of requested shapes is bigger than target", () => {
      expect(
        validatePossible([[1, 1], [2]], {
          "0": { area: 1, shape: { "0,0": "#" } },
        })
      ).toBe(false);
    });

    it("should return true if combined area of requested shapes is equal to target", () => {
      expect(
        validatePossible([[1, 1], [1]], {
          "0": { area: 1, shape: { "0,0": "#" } },
        })
      ).toBe(true);
    });

    it("should return true if combined area of requested shapes is less than target", () => {
      expect(
        validatePossible([[2, 1], [1]], {
          "0": { area: 1, shape: { "0,0": "#" } },
        })
      ).toBe(true);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return 2 for example input", () => {
        expect(part1Solution(input)).toBe(2);
      });
    });
  });
});
