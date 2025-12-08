import { coordToString } from "../../../utils/general";

export type Coordinate3D = [number, number, number];
export type Circuits = string[][];
export type ConnectionList = { coordinate: Coordinate3D; connections: [] }[];

export function coordinatesToKey(a: Coordinate3D, b: Coordinate3D): string {
  return `${a.toString()}|${b.toString()}`;
}

export function keyToCoord(str: string): Coordinate3D {
  return str.split(",").map((s) => +s) as Coordinate3D;
}

export function parseInput(rawInput: string): Coordinate3D[] {
  const lines = rawInput.split("\n");

  return lines.map((line) => line.split(",").map((n) => +n) as Coordinate3D);
}

export function calculateEuclideanDistance(a: Coordinate3D, b: Coordinate3D) {
  return Math.sqrt(
    Math.pow(a[0] - b[0], 2) +
      Math.pow(a[1] - b[1], 2) +
      Math.pow(a[2] - b[2], 2)
  );
}

export function inSameCircuit(
  a: string,
  b: string,
  circuits: Circuits
): boolean {
  return circuits.some((circuit) => circuit.includes(a) && circuit.includes(b));
}

export function addToCircuit(
  a: string,
  b: string,
  circuits: Circuits
): Circuits {
  // find all existing circuits with a
  // find all existing circuits with b
  const newCircuit = new Set<string>();
  newCircuit.add(a);
  newCircuit.add(b);

  circuits.forEach((circuit) => {
    if (circuit.includes(a) || circuit.includes(b)) {
      circuit.forEach((coord) => newCircuit.add(coord));
    }
  });

  const newCircuitArray = Array.from(newCircuit);

  // remove all references to a and b

  const updatedCircuits = circuits.filter(
    (circuit) => !(circuit.includes(a) || circuit.includes(b))
  );

  updatedCircuits.push(newCircuitArray);

  return updatedCircuits;
}

export function findDistances(coordinates: Coordinate3D[]) {
  const potentialConnections: [string, number][] = [];

  for (let a = 0; a < coordinates.length; a++) {
    for (let b = 0; b < coordinates.length; b++) {
      const junctionBoxA = coordinates[a];
      const junctionBoxB = coordinates[b];
      if (a <= b) {
        continue;
      }

      const distance = calculateEuclideanDistance(junctionBoxA, junctionBoxB);

      potentialConnections.push([
        coordinatesToKey(junctionBoxA, junctionBoxB),
        distance,
      ]);
    }
  }

  potentialConnections.sort((a, b) => a[1] - b[1]);

  return potentialConnections;
}

export function connectJunctionBoxes(
  coordinates: Coordinate3D[],
  times: number = 1000
): Circuits {
  let circuits: Circuits = [];
  let successfulConnections = 0;
  let index = 0;

  const potentialConnections = findDistances(coordinates);

  while (successfulConnections < times) {
    const connection = potentialConnections[index];
    index++;

    const [coordA, coordB] = connection[0].split("|");

    circuits = addToCircuit(coordA, coordB, circuits);
    successfulConnections++;
  }

  return circuits;
}

export function part1Solution(
  coordinates: Coordinate3D[],
  times: number
): number {
  const circuits = connectJunctionBoxes(coordinates, times);

  circuits.sort((a, b) => {
    return b.length - a.length;
  });

  const [a, b, c, ...rest] = circuits;
  return a.length * b.length * c.length;
}
