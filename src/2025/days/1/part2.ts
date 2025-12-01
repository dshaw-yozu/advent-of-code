export function part2Solution(instructions: string[]): {
  zeroCount: number;
  currentNumber: number;
} {
  let currentNumber = 50;
  let zeroCount = 0;
  const DIAL_SIZE = 100;

  instructions.forEach((instruction) => {
    const direction = instruction.slice(0, 1);
    const spin = instruction.slice(1);

    const D = direction === "R" ? 1 : -1;

    for (let i = 0; i < +spin; i++) {
      currentNumber = currentNumber + D;

      if (currentNumber >= DIAL_SIZE) {
        currentNumber = currentNumber % DIAL_SIZE;
      } else if (currentNumber < 0) {
        currentNumber = DIAL_SIZE + currentNumber;
      }
      if (currentNumber === 0) {
        zeroCount++;
      }
    }
  });

  return { zeroCount, currentNumber };
}
