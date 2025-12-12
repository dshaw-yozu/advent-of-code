import { DeviceRecord, findAllPaths } from "./part1";

export async function part2Solution(devices: DeviceRecord): Promise<number> {
  const svr_dac = findAllPaths(devices, "svr", "dac");
  const svr_fft = findAllPaths(devices, "svr", "fft");
  const fft_dac = findAllPaths(devices, "fft", "dac");
  const dac_fft = findAllPaths(devices, "dac", "fft");
  const dac_out = findAllPaths(devices, "dac", "out");
  const fft_out = findAllPaths(devices, "fft", "out");

  const promises = [svr_dac, dac_fft, fft_out, svr_fft, fft_dac, dac_out];

  const [a, b, c, d, e, f] = await Promise.all(promises);

  return a.length * b.length * c.length + d.length * e.length * f.length;
}
