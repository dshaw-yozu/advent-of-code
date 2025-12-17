import { coordToString } from "../../../utils/general";

export type Shape = Record<string, string>;
export type Shapes = Record<number, { area: number; shape: Shape }>;
export type Dimensions = [number, number];
export type AreaConfig = [Dimensions, number[]];

export function parseInput(rawInput: string): {
  shapes: Shapes;
  areas: AreaConfig[];
} {
  const lines = rawInput.split("\n");
  const shapes: Shapes = {};
  let i = 0;
  let currentShapeNumber: number = -1;
  let currentShape: Shape = {};
  let y = 0;
  let areas: AreaConfig[] = [];
  while (i < lines.length) {
    const currentLine = lines[i];

    if (/^\d:/.test(currentLine)) {
      currentShapeNumber = Number(currentLine.split(":")[0]);
    } else if (/[#.]/.test(currentLine)) {
      currentLine.split("").forEach((char, x) => {
        currentShape[coordToString([x, y])] = char;
      });
      y++;
    } else if (currentLine.trim().length === 0) {
      const area = Object.values(currentShape).reduce(
        (acc, c) => (c === "#" ? acc + 1 : acc),
        0
      );
      shapes[currentShapeNumber] = { area, shape: currentShape };
      currentShape = {};
      y = 0;
    } else if (/\d+x\d+:/.test(currentLine)) {
      const [dimensionsRaw, shapesRaw] = currentLine.split(":");
      const dimensions = dimensionsRaw.split("x").map((c) => +c) as Dimensions;

      const shapes = shapesRaw
        .trim()
        .split(" ")
        .map((n) => +n);

      areas.push([dimensions, shapes]);
    } else {
      console.error(currentLine);
    }
    i++;
  }
  return { shapes, areas };
}

export function validatePossible(
  areaConfig: AreaConfig,
  shapes: Shapes
): boolean {
  const [dimensions, targetShapes] = areaConfig;
  const [x, y] = dimensions;
  const area = x * y;

  const targetShapeArea = targetShapes.reduce((acc, shapeCount, index) => {
    return acc + shapeCount * shapes[index].area;
  }, 0);

  return targetShapeArea <= area;
}

export function part1Solution({
  shapes,
  areas,
}: {
  shapes: Shapes;
  areas: AreaConfig[];
}): number {
  const possibleAreas = areas.filter((area) => validatePossible(area, shapes));
  return possibleAreas.length;
}
