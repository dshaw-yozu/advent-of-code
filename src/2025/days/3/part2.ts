import { Bank } from "./part1";

export function getBiggestXDigitNumber(
  input: string,
  x: number
): undefined | number {
  let biggestNumber = 0;

  if (x <= 0) {
    console.log("invalid x", x);
    return undefined;
  }
  if (input.length === x) {
    console.log("x matches input length", x, input);
    return +input;
  }

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const part = getBiggestXDigitNumber(input.slice(j), x - 1);

      if (!part) {
        break;
      }

      const newBiggestNumber = +`${input.at(i)}${part}`;

      console.log(newBiggestNumber);
      if (newBiggestNumber > biggestNumber) {
        biggestNumber = newBiggestNumber;
      }
    }
  }

  return biggestNumber;
}

export function getHighestJoltage(bank: Bank): number | undefined {
  return getBiggestXDigitNumber(bank, 12);
}

export function part2Solution(banks: Bank[]): number {
  return banks.reduce((acc, bank) => {
    const joltage = getHighestJoltage(bank) || 0;

    return acc + joltage;
  }, 0);
}
