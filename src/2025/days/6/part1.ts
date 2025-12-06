export type Lines = (number | string)[][];

export function parseInput(rawInput: string): Lines {
  const lines = rawInput.split("\n");

  return lines.map((line) =>
    line
      .replaceAll(/\s+/g, ",")
      .split(",")
      .filter((char) => !!char)
      .map((char) => (isNaN(Number.parseInt(char)) ? char : Number(char)))
  );
}

export function doColumnSum(lines: Lines, index: number) {
  const columnValues = lines.map((line) => line[index]);

  const operator = columnValues[columnValues.length - 1];
  delete columnValues[columnValues.length - 1];

  return (columnValues as number[]).reduce(
    (acc, curr) => {
      switch (operator) {
        case "*":
          return (acc *= curr);
        case "+":
          return (acc += curr);
        default:
          return acc;
      }
    },
    operator === "*" ? 1 : 0
  );
}

export function part1Solution(lines: Lines): number {
  const columns = lines[0].length;
  let answer = 0;
  for (let i = 0; i < columns; i++) {
    answer += doColumnSum(lines, i);
  }

  return answer;
}
