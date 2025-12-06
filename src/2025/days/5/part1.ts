export type Range = [number, number];
export type Item = number;

export function parseInput(rawInput: string): [Range[], Item[]] {
  const [ranges, items] = rawInput.split("\n\n");

  const parsedRanges = ranges
    .split("\n")
    .map((range) => range.split("-").map(Number));

  const parsedItems = items.split("\n").map(Number);

  return [parsedRanges as Range[], parsedItems];
}

export function isWithinRange(input: number, min: number, max: number) {
  return input <= max && input >= min;
}

export function isProductFresh(itemID: Item, ranges: Range[]) {
  return ranges.some((range) => isWithinRange(itemID, range[0], range[1]));
}

export function part1Solution(items: Item[], ranges: Range[]): number {
  return items.reduce((acc, item) => {
    return isProductFresh(item, ranges) ? acc + 1 : acc;
  }, 0);
}
