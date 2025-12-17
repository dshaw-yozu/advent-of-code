import { part1Solution, parseInput } from "./part1";

import fs from "fs";
import path from "path";

const rawInput = fs.readFileSync(
  path.join(import.meta.dirname, "./input.txt"),
  "utf8"
);

const input = parseInput(rawInput);

console.time("Part 1 Time");
const p1 = part1Solution(input);
console.timeEnd("Part 1 Time");
console.log(`Part 1 Solution: ${p1}`);
