import { coordToString } from "../../../utils/general";

export type Coordinate2D = [number, number];

export function coordinatesToKey(a: Coordinate2D, b: Coordinate2D): string {
  return `${a.toString()}|${b.toString()}`;
}

export function keyToCoord(str: string): Coordinate2D {
  return str.split(",").map((s) => +s) as Coordinate2D;
}

export function parseInput(rawInput: string): Coordinate2D[] {
  const lines = rawInput.split("\n");

  return lines.map((line) => line.split(",").map((n) => +n) as Coordinate2D);
}

export function calculateArea(a: Coordinate2D, b: Coordinate2D) {
  const [xA, yA] = a;
  const [xB, yB] = b;

  const xLargest = Math.max(xA, xB);
  const xSmallest = Math.min(xA, xB);

  const yLargest = Math.max(yA, yB);
  const ySmallest = Math.min(yA, yB);

  return (
    Math.max(xLargest - xSmallest + 1, 1) *
    Math.max(yLargest - ySmallest + 1, 1)
  );
}

export function getAreas(coordinates: Coordinate2D[]) {
  const areas: [string, number][] = [];

  for (let a = 0; a < coordinates.length; a++) {
    for (let b = 0; b < coordinates.length; b++) {
      const cornerA = coordinates[a];
      const cornerB = coordinates[b];
      if (a <= b) {
        continue;
      }

      const area = calculateArea(cornerA, cornerB);

      areas.push([coordinatesToKey(cornerA, cornerB), area]);
    }
  }

  areas.sort((a, b) => b[1] - a[1]);

  return areas;
}

export function part1Solution(coordinates: Coordinate2D[]): number {
  const areas = getAreas(coordinates);

  const largestArea = areas[0];

  return largestArea[1];
}
