export function coordToString(coord: [number, number]): string {
  return `${coord[0]},${coord[1]}`;
}

export function stringToCoord(str: string): [number, number] {
  const [x, y] = str.split(",");
  return [+x, +y];
}
