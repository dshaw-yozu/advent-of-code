type Range = [number, number];

export function parseInput(rawInput: string): Range[] {
  const lines = rawInput
    .split(",")
    .map((range) => range.split("-").map(Number) as unknown as Range);
  return lines;
}

export function getInvalidCodes(a: number, b: number) {
  const invalidRanges = [];

  for (let i = a; i <= b; i++) {
    const numberAsString = i.toString();
    if (numberAsString.length % 2 === 0) {
      const firstHalf = numberAsString.slice(0, numberAsString.length / 2);
      const secondHalf = numberAsString.slice(numberAsString.length / 2);
      if (firstHalf === secondHalf) {
        invalidRanges.push(i);
      }
    }
  }

  return invalidRanges;
}

export function part1Solution(ranges: Range[]): number {
  return ranges.reduce((acc, range) => {
    const invalidCodes = getInvalidCodes(range[0], range[1]);

    return (acc += invalidCodes.reduce((acc, code) => (acc += code), 0));
  }, 0);
}
