import {
  coordToString,
  getNeighbourCoords,
  getPaperNeighbours,
  parseInput,
  part1Solution,
} from "./part1";

export const exampleInput = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

describe("day 4", () => {
  describe("parseInput", () => {
    test("given the raw input text, should return coords of paper", () => {
      // prettier-ignore
      expect(parseInput(exampleInput)).toStrictEqual(    [
      [ 2, 0 ], [ 3, 0 ], [ 5, 0 ], [ 6, 0 ], [ 7, 0 ],
      [ 8, 0 ], [ 0, 1 ], [ 1, 1 ], [ 2, 1 ], [ 4, 1 ],
      [ 6, 1 ], [ 8, 1 ], [ 9, 1 ], [ 0, 2 ], [ 1, 2 ],
      [ 2, 2 ], [ 3, 2 ], [ 4, 2 ], [ 6, 2 ], [ 8, 2 ],
      [ 9, 2 ], [ 0, 3 ], [ 2, 3 ], [ 3, 3 ], [ 4, 3 ],
      [ 5, 3 ], [ 8, 3 ], [ 0, 4 ], [ 1, 4 ], [ 3, 4 ],
      [ 4, 4 ], [ 5, 4 ], [ 6, 4 ], [ 8, 4 ], [ 9, 4 ],
      [ 1, 5 ], [ 2, 5 ], [ 3, 5 ], [ 4, 5 ], [ 5, 5 ],
      [ 6, 5 ], [ 7, 5 ], [ 9, 5 ], [ 1, 6 ], [ 3, 6 ],
      [ 5, 6 ], [ 7, 6 ], [ 8, 6 ], [ 9, 6 ], [ 0, 7 ],
      [ 2, 7 ], [ 3, 7 ], [ 4, 7 ], [ 6, 7 ], [ 7, 7 ],
      [ 8, 7 ], [ 9, 7 ], [ 1, 8 ], [ 2, 8 ], [ 3, 8 ],
      [ 4, 8 ], [ 5, 8 ], [ 6, 8 ], [ 7, 8 ], [ 8, 8 ],
      [ 0, 9 ], [ 2, 9 ], [ 4, 9 ], [ 5, 9 ], [ 6, 9 ],
      [ 8, 9 ]
        ]);
    });
  });

  describe("getNeighbourCoords", () => {
    it("should return all 8 neighbouring coords", () => {
      expect(getNeighbourCoords([0, 0])).toStrictEqual([
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ]);
    });
  });

  describe("getPaperNeighbours", () => {
    const paperLocations = new Set(
      parseInput(exampleInput).map((coord) => coordToString(coord))
    );
    it("should return count of neighbours", () => {
      expect(getPaperNeighbours([2, 0], paperLocations)).toBe(3);
      expect(getPaperNeighbours([3, 0], paperLocations)).toBe(3);
      expect(getPaperNeighbours([0, 1], paperLocations)).toBe(3);
      expect(getPaperNeighbours([1, 1], paperLocations)).toBe(6);
    });
  });

  describe("part1Solution", () => {
    it("should return number of paper rolls which are accessible", () => {
      expect(part1Solution(parseInput(exampleInput))).toBe(13);
    });
  });
});
