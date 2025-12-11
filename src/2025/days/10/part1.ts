export type SwitchResult = number[];

export type LightSetup = {
  target: (0 | 1)[];
  switches: SwitchResult[];
};

export function parseInput(rawInput: string): LightSetup[] {
  const lines = rawInput.split("\n");

  return lines.map((line) => {
    const targetMatch = line.match(/\[([.#]+)\]/);
    let target: (0 | 1)[] = [];
    if (targetMatch) {
      target = targetMatch[1].split("").map((c) => {
        if (c === ".") return 0;
        return 1;
      });
    }

    let switches: SwitchResult[] = [];
    const switchesMatches = line.matchAll(/\(([\d,]+)\)/g);
    if (switchesMatches) {
      switchesMatches.forEach((match) => {
        switches.push(
          match[1]
            .split(",")
            .filter((c) => !!c)
            .map((c) => +c)
        );
      });
    }

    return { target, switches };
  });
}

export function getSwitchPermutations(switches: SwitchResult[]) {
  const result: SwitchResult[][] = [];

  const permute = (arr: SwitchResult[], m: SwitchResult[] = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      if (m.length > 0) {
        result.push(m);
      }
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(switches);

  result.sort((a, b) => a.length - b.length);

  return result;
}

export function pressButtonsInSequence(sequence: SwitchResult[]) {
  let lights: number[] = [];

  sequence.forEach((sw) => {
    sw.forEach((light) => {
      if (lights.includes(light)) {
        lights = lights.filter((l) => l !== light);
      } else {
        lights.push(light);
      }
    });
  });

  lights.sort();

  return lights;
}

export function findLeastNumberOfSwitchPushes(lightSetup: LightSetup):
  | {
      presses: number;
      sequence: SwitchResult[];
    }
  | undefined {
  const { target, switches } = lightSetup;

  const onIndexes = target
    .map((state, index) => (state ? index : undefined))
    .filter((i) => typeof i !== "undefined")
    .sort();

  const permutations = getSwitchPermutations(switches);

  for (let p = 0; p < permutations.length; p++) {
    const permuation = permutations[p];

    const result = pressButtonsInSequence(permuation);

    if (result.toString() === onIndexes.toString()) {
      return { presses: permuation.length, sequence: permuation };
    }
  }
}

export function part1Solution(lightSetups: LightSetup[]): number {
  return lightSetups.reduce((acc, setup) => {
    const result = findLeastNumberOfSwitchPushes(setup);

    if (result) {
      acc += result.presses;
    }
    return acc;
  }, 0);
}
