import { type Range } from "./part1";

export function isRangeWithinAnotherRange(range: Range, ranges: Range[]) {
  const [min, max] = range;

  return ranges.some(([rMin, rMax]) => {
    if (rMax === max && rMin === min) {
      return false;
    }
    return min >= rMin && max <= rMax;
  });
}

export function squashRanges(a: Range, b: Range) {
  const [minA, maxA] = a;
  const [minB, maxB] = b;

  if (minA > minB && maxA < maxB) {
    // b contains a
    return [minB, maxB] as Range;
  }

  if (minB > minA && maxB < maxA) {
    // a contains b
    return [minA, maxB] as Range;
  }

  if (minA < minB && maxA > minB) {
    return [minA, maxB] as Range;
  }

  if (minA > minB && maxA > maxB) {
    return [minB, maxA] as Range;
  }

  return false;
}

export function part2Solution(ranges: Range[]): bigint {
  let count = 0n;
  let currentMax = 0n;

  ranges.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < ranges.length; i++) {
    const [min, max] = ranges[i];

    if (min >= currentMax) {
      const difference = BigInt(max) - BigInt(min) + 1n;
      count += difference;
      currentMax = BigInt(max);
    } else if (min <= currentMax && max > currentMax) {
      // not +1 as max has already been included
      const difference = BigInt(max) - BigInt(currentMax);
      count += difference;
      currentMax = BigInt(max);
    } else {
      console.log("within range", currentMax, BigInt(max) - BigInt(currentMax));
    }
  }

  return count;
}
