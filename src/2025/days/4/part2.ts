import { Coord, coordToString, getPaperNeighbours } from "./part1";

export function part2Solution(coords: Coord[]): number {
  const paperLocationsSet = new Set(
    coords.map((coord) => coordToString(coord))
  );

  let prevRemovedRolls = -1;
  let removedRolls = -2;

  let stages = [];

  while (removedRolls !== prevRemovedRolls) {
    prevRemovedRolls = removedRolls;
    removedRolls = coords.reduce((acc, coord) => {
      const neighbours = getPaperNeighbours(coord, paperLocationsSet);

      if (neighbours < 4) {
        paperLocationsSet.delete(coordToString(coord));
        return acc + 1;
      }
      return acc;
    }, 0);

    stages.push(paperLocationsSet);
  }

  return removedRolls;
}
