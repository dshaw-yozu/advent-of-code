import { part1Solution, parseInput } from "./part1";

import fs from "fs";
import path from "path";
import { part2Solution } from "./part2";

const rawInput = fs.readFileSync(
  path.join(import.meta.dirname, "./input.txt"),
  "utf8"
);

const input = parseInput(rawInput);

console.time("Part 1 Time");
const p1 = await part1Solution(input);
console.timeEnd("Part 1 Time");
console.log(`Part 1 Solution: ${p1}`);

console.log("-".repeat(20));

console.time("Part 2 Time");
const p2 = await part2Solution(input);
console.timeEnd("Part 2 Time");
console.log(`Part 2 Solution: ${p2}`);
