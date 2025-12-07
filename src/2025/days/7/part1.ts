import { coordToString } from "../../../utils/general";

export type Matrix = Map<string, string>;

export function parseInput(rawInput: string): {
  matrix: Matrix;
  height: number;
  width: number;
} {
  const lines = rawInput.split("\n");

  const matrix: Matrix = new Map();
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[0].length; x++) {
      matrix.set(coordToString([x, y]), lines[y][x]);
    }
  }

  return { matrix, height: lines.length, width: lines[0].length };
}

export function simulateTacyon(matrix: Matrix, height: number, width: number) {
  // for every row in the matrix, starting from the second
  // check if the above element is an S | or ^ and add a | accordingly

  let splitCount = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const current = matrix.get(coordToString([x, y]))!;
      const downCentre = matrix.get(coordToString([x, y + 1]));

      if (current === "S") {
        matrix.set(coordToString([x, y + 1]), "|");
      }

      if (current === "|" && downCentre === "^") {
        splitCount++;
        matrix.set(coordToString([x - 1, y + 1]), "|");
        matrix.set(coordToString([x + 1, y + 1]), "|");
      } else if (current === "|") {
        matrix.set(coordToString([x, y + 1]), "|");
      }
    }
  }

  return splitCount;
}

export function part1Solution(
  matrix: Matrix,
  height: number,
  width: number
): number {
  return simulateTacyon(matrix, height, width);
}
