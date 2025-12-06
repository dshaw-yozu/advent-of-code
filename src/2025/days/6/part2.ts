import { Lines } from "./part1";

export function parseInput(rawInput: string): Lines {
  const lines = rawInput.split("\n");
  const operatorLine = lines[lines.length - 1];

  // ```
  // there doesn't seem to be a reason why its " 45" and "64 "
  // so spaces are important, the column spaces are the ones before the operators

  // 123 328  51 64
  //  45 64  387 23
  //   6 98  215 314
  // *   +   *   +
  //    ^<  ^<  ^<
  // ```;
  const seperatorColumnIndexes: number[] = [];

  operatorLine.split("").forEach((c, i) => {
    if (c !== " " && i !== 0) {
      seperatorColumnIndexes.push(i - 1);
    }
  });

  const linesWithSpaces = lines.map((line) => {
    const numbersWithSpaces = [];

    if (line.includes("+")) {
      return line
        .replaceAll(/\s+/g, ",")
        .split(",")
        .filter((c) => !!c);
    }

    numbersWithSpaces.push(line.slice(0, seperatorColumnIndexes[0]));

    for (let i = 0; i < seperatorColumnIndexes.length - 1; i++) {
      const numberWithSpace = line.slice(
        seperatorColumnIndexes[i] + 1,
        seperatorColumnIndexes[i + 1]
      );
      numbersWithSpaces.push(numberWithSpace);
    }

    numbersWithSpaces.push(
      line.slice(
        seperatorColumnIndexes[seperatorColumnIndexes.length - 1] + 1,
        line.length
      )
    );

    return numbersWithSpaces;
  });

  return [...linesWithSpaces];
}

//numbers strings passed to this number have spaces
export function convertToCephalopodNumbers(numbers: string[]): number[] {
  // find longest number
  const longestNumber = [...numbers].sort((a, b) => +b - +a)[0];
  const convertedNumbers = [];

  for (let i = 0; i < longestNumber.length; i++) {
    const numberParts = numbers
      .map((number) => number.charAt(i))
      .filter((c) => !!c);

    const cephalopodsNumber = Number(numberParts.join(""));
    convertedNumbers.push(cephalopodsNumber);
  }

  return convertedNumbers;
}

export function doColumnSum(lines: Lines, index: number) {
  const columnValues = lines.map((line) => line[index]);

  const operator = columnValues[columnValues.length - 1];
  delete columnValues[columnValues.length - 1];

  // only difference from part 1
  const convertedColumnValues = convertToCephalopodNumbers(
    columnValues as string[]
  );

  return convertedColumnValues.reduce(
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

export function part2Solution(lines: Lines): number {
  const columns = lines[0].length;
  let answer = 0;
  for (let i = 0; i < columns; i++) {
    answer += doColumnSum(lines, i);
  }

  return answer;
}
