type Range = [number, number];

export function getInvalidCodes(a: number, b: number) {
  const invalidCodes = new Set<number>();

  for (let i = a; i <= b; i++) {
    const numberAsString = i.toString();

    for (let j = 1; j <= numberAsString.length / 2; j++) {
      const pattern = numberAsString.slice(0, j);

      if (numberAsString.length % j === 0) {
        const lengthOfPattern = numberAsString.length / j;
        const testString = pattern.repeat(lengthOfPattern);

        if (testString === numberAsString) {
          invalidCodes.add(i);
        }
      }
    }
  }

  return Array.from(invalidCodes);
}

export function part2Solution(ranges: Range[]): number {
  return ranges.reduce((acc, range) => {
    const invalidCodes = getInvalidCodes(range[0], range[1]);

    return (acc += invalidCodes.reduce((acc, code) => (acc += code), 0));
  }, 0);
}
