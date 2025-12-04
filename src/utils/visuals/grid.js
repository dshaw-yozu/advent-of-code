import chalk from "chalk";
import readline from "readline";

const log = console.log;
const yellow = chalk.bgYellow.black.bold;
const black = chalk.bgBlack.white;
const white = chalk.bgWhite.black;

const colors = {
  yellow,
  black,
  white,
};

const defaultColorConfig = {
  X: "yellow",
};

function coordToString(coord) {
  return `${coord[0]},${coord[1]}`;
}

const clearLines = (n) => {
  readline.moveCursor(process.stdout, 0, -1 * n);
  readline.clearScreenDown(process.stdout);
};

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createGrid(width, height, data, colourConfig = defaultColorConfig) {
  const lines = [];

  for (let x = 0; x < width; x++) {
    let line = "";
    for (let y = 0; y < height; y++) {
      const item = data?.[coordToString([x, y])] ?? " ";
      const color = colors?.[colourConfig[item]] || black;
      line = line + color(item);
    }
    lines.push(line);
  }

  return lines;
}

export function drawGrid(width, height, data, colourConfig) {
  const grid = createGrid(width, height, data, colourConfig);

  clearLines(height);
  grid.forEach((line) => log(line));
}

export async function animateGrid(
  width,
  height,
  frameData,
  delay = 100,
  colourConfig
) {
  // Create an interface for input and output

  for (let i = 0; i < frameData.length; i++) {
    drawGrid(width, height, frameData[i], colourConfig);
    if (i !== frameData.length) {
      await sleep(delay);
    }
  }
  rl.close();
}

// const data = new Array(10)
//   .fill("")
//   .map((_, i) => ({ [coordToString([i, i])]: "X" }));

// await animateGrid(10, 10, data);
