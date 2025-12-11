import {
  findLeastNumberOfSwitchPushes,
  getSwitchPermutations,
  parseInput,
  part1Solution,
  pressButtonsInSequence,
} from "./part1";

export const exampleInput = `[.##.] (3) (1,3) (2) (2,3) (0,2) (0,1) {3,5,4,7}
[...#.] (0,2,3,4) (2,3) (0,4) (0,1,2) (1,2,3,4) {7,5,12,7,2}
[.###.#] (0,1,2,3,4) (0,3,4) (0,1,2,4,5) (1,2) {10,11,11,5,10,5}`;

const input = parseInput(exampleInput);

describe("day 10", () => {
  describe("parseInput", () => {
    it("given the raw input text, should return list of 2d coordinates", () => {
      expect(parseInput(exampleInput)).toStrictEqual([
        {
          target: [0, 1, 1, 0],
          switches: [[3], [1, 3], [2], [2, 3], [0, 2], [0, 1]],
        },
        {
          target: [0, 0, 0, 1, 0],
          switches: [
            [0, 2, 3, 4],
            [2, 3],
            [0, 4],
            [0, 1, 2],
            [1, 2, 3, 4],
          ],
        },

        {
          target: [0, 1, 1, 1, 0, 1],
          switches: [
            [0, 1, 2, 3, 4],
            [0, 3, 4],
            [0, 1, 2, 4, 5],
            [1, 2],
          ],
        },
      ]);
    });
  });

  describe("getSwitchPermutations", () => {
    it("should return 1 permutation for 1 switch", () => {
      expect(getSwitchPermutations([[1]])).toStrictEqual([[[1]]]);
    });

    it("should return 3 permutations for 2 switches", () => {
      expect(getSwitchPermutations([[1], [2]])).toStrictEqual([
        [[1]],
        [[2]],
        [[1], [2]],
        [[2], [1]],
      ]);
    });

    it("should return 6 permutations for 3 switches", () => {
      expect(getSwitchPermutations([[1], [2], [3]])).toStrictEqual([
        [[1]],
        [[2]],
        [[3]],
        [[1], [2]],
        [[1], [3]],
        [[2], [1]],
        [[2], [3]],
        [[3], [1]],
        [[3], [2]],
        [[1], [2], [3]],
        [[1], [3], [2]],
        [[2], [1], [3]],
        [[2], [3], [1]],
        [[3], [1], [2]],
        [[3], [2], [1]],
      ]);
    });
  });

  describe("findLeastNumberOfSwitchPushes", () => {
    it("should find the minimum number of presses to light up the target", () => {
      expect(findLeastNumberOfSwitchPushes(input[0])!.presses).toBe(2);
      expect(findLeastNumberOfSwitchPushes(input[1])!.presses).toBe(3);
      expect(findLeastNumberOfSwitchPushes(input[2])!.presses).toBe(2);
    });
  });

  describe("pressButtonsInSequence", () => {
    it("should toggle lights", () => {
      expect(pressButtonsInSequence([[1]])).toStrictEqual([1]);
      expect(pressButtonsInSequence([[1], [1]])).toStrictEqual([]);
    });

    it("should turn multiple lights on", () => {
      expect(pressButtonsInSequence([[1, 2]])).toStrictEqual([1, 2]);
      expect(pressButtonsInSequence([[1], [1, 2]])).toStrictEqual([2]);
    });
  });

  describe("part1", () => {
    describe("part1Solution", () => {
      it("should return 50 for example input", () => {
        expect(part1Solution(input)).toBe(7);
      });
    });
  });
});
