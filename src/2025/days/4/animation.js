import { animateGrid } from "../../../utils/visuals/grid.js";
import { parseInput } from "./part1.ts";
import { part2Solution } from "./part2.ts";
import fs from "fs";
import path from "path";

const rawInput = fs.readFileSync(
  path.join(import.meta.dirname, "./input.txt"),
  "utf8"
);
const ranges = parseInput(rawInput);

const [p2, data] = part2Solution(ranges);

const frames = data.map((dataSet) => {
  const frameData = {};
  dataSet.forEach((coord) => {
    frameData[coord] = "-";
  });

  return frameData;
});

await animateGrid(136, 136, frames, 100, { "-": "white" });
