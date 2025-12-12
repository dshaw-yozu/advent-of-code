export type DeviceRecord = { [x: string]: string[] };

export function parseInput(rawInput: string): DeviceRecord {
  const lines = rawInput.split("\n");

  const output: DeviceRecord = {};
  lines.forEach((line) => {
    const [device, connections] = line.split(":") as [string, string];

    const connectionList = connections.trim().split(" ") as string[];

    output[device] = connectionList;
  });

  return output;
}

export function findAllPaths(
  devices: DeviceRecord,
  start: string = "you",
  end: string = "out"
): Promise<string[][]> {
  return new Promise((resolve) => {
    const paths: string[][] = [];

    const followPath = (
      device: string,
      currentPath: string[] = [start],
      depth = 0
    ) => {
      const currentDevice = devices[device];

      if (!currentDevice) return;

      if (currentDevice.includes(end)) {
        paths.push([...currentPath, end]);
      } else {
        const newPaths = currentDevice.filter((d) => !currentPath.includes(d));

        if (newPaths.length === 0) return;
        newPaths.forEach((d) => {
          followPath(d, [...currentPath, d], depth + 1);
        });
      }
    };

    followPath(start);

    console.log(start, end, paths.length);

    resolve(paths);
  });
}

export async function part1Solution(devices: DeviceRecord): Promise<number> {
  return (await findAllPaths(devices)).length;
}
