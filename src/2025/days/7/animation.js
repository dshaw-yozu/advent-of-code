import { stringToCoord } from "../../../utils/general";
import { drawGrid } from "../../../utils/visuals/grid.js";
import { coordToString } from "../4/part1";
import { parseInput, simulateTacyon } from "./part1.ts";
import fs from "fs";
import path from "path";

const rawInput = fs.readFileSync(
  path.join(import.meta.dirname, "./input.txt"),
  "utf8"
);
const { matrix, width, height } = parseInput(rawInput);
simulateTacyon(matrix, height, width);

const afterData = {};
[...matrix.entries()].forEach(([k, v]) => {
  const [x, y] = stringToCoord(k);
  afterData[coordToString([y, x])] = v;
});

drawGrid(width, height, afterData, {
  "|": "green",
  "^": "red",
  S: "yellow",
  ".": "allBlack",
});
