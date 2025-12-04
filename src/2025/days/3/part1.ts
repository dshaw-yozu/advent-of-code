export type Bank = string;

export function parseInput(rawInput: string): Bank[] {
  const lines = rawInput.split("\n");
  return lines;
}

export function getHighestJoltage(bank: Bank): number {
  let largestJoltage = 0;

  // starting from the first battery and moving right
  for (let i = 0; i < bank.length; i++) {
    // get the next battery
    for (let j = i + 1; j < bank.length; j++) {
      const a = bank.at(i);
      const b = bank.at(j);

      const joltage = +`${a}${b}`;

      if (joltage > largestJoltage) {
        largestJoltage = joltage;
      }
    }
  }
  return largestJoltage;
}

export function part1Solution(banks: Bank[]): number {
  return banks.reduce((acc, bank) => {
    const joltage = getHighestJoltage(bank);

    return acc + joltage;
  }, 0);
}
