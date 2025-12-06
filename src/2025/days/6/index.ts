import { part1Solution, parseInput as parseInput1 } from "./part1";
import { part2Solution, parseInput as parseInput2 } from "./part2";
import fs from "fs";
import path from "path";

const rawInput = fs.readFileSync(
  path.join(import.meta.dirname, "./input.txt"),
  "utf8"
);

console.time("Part 1 Time");
const lines1 = parseInput1(rawInput);
const p1 = part1Solution(lines1);
console.timeEnd("Part 1 Time");
console.log(`Part 1 Solution: ${p1}`);

console.log("-".repeat(20));

console.time("Part 2 Time");
const lines2 = parseInput2(rawInput);

const p2 = part2Solution(lines2);
console.timeEnd("Part 2 Time");
console.log(`Part 2 Solution: ${p2}`);
