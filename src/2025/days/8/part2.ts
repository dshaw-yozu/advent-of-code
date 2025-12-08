import {
  addToCircuit,
  Circuits,
  Coordinate3D,
  findDistances,
  keyToCoord,
} from "./part1";

export function connectJunctionBoxes(
  coordinates: Coordinate3D[]
): [string, string] {
  let circuits: Circuits = [];
  let successfulConnections = 0;
  let index = 0;
  let lastA: string, lastB: string;

  const potentialConnections = findDistances(coordinates);

  // we have a full circuit when the largest circuit contains all coordinates
  while (circuits?.[0]?.length !== coordinates.length) {
    const connection = potentialConnections[index];
    index++;

    const [coordA, coordB] = connection[0].split("|");

    circuits = addToCircuit(coordA, coordB, circuits);
    successfulConnections++;
    lastA = coordA;
    lastB = coordB;
  }

  return [lastA!, lastB!];
}

export function part2Solution(coordinates: Coordinate3D[]): number {
  const [a, b] = connectJunctionBoxes(coordinates);

  const aCoord = keyToCoord(a);
  const bCoord = keyToCoord(b);

  return aCoord[0] * bCoord[0];
}
