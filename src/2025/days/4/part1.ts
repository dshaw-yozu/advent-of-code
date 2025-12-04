export type Coord = [number, number];

export function parseInput(rawInput: string): Coord[] {
  const paper: Coord[] = [];

  const rows = rawInput.split("\n");

  rows.forEach((row, y) => {
    const columns = row.split("");

    columns.forEach((column, x) => {
      if (column === "@") {
        paper.push([x, y]);
      }
    });
  });
  return paper;
}

export function getNeighbourCoords(coord: Coord): Coord[] {
  const neighbourCoords = [];

  const [x, y] = coord;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) {
        continue;
      }

      neighbourCoords.push([x + dx, y + dy] as Coord);
    }
  }
  return neighbourCoords;
}

export function coordToString(coord: Coord): string {
  return `${coord[0]},${coord[1]}`;
}

export function getPaperNeighbours(
  coord: Coord,
  paperLocationsSet: Set<string>
): number {
  const neighbourCoords = getNeighbourCoords(coord);

  return neighbourCoords.reduce((acc, coord) => {
    if (paperLocationsSet.has(coordToString(coord))) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
export function part1Solution(coords: Coord[]): number {
  const paperLocationsSet = new Set(
    coords.map((coord) => coordToString(coord))
  );

  return coords.reduce((acc, coord) => {
    const neighbours = getPaperNeighbours(coord, paperLocationsSet);

    return neighbours < 4 ? acc + 1 : acc;
  }, 0);
}
