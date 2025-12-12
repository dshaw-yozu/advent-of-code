import { parseInput } from "./part1";
import { part2Solution } from "./part2";

const exampleInput = `svr: aaa bbb
aaa: fft
fft: ccc
bbb: tty
tty: ccc
ccc: ddd eee
ddd: hub
hub: fff
eee: dac
dac: fff
fff: ggg hhh
ggg: out
hhh: out`;

describe("day 11 part 2", () => {
  describe("part 2 solution", () => {
    it("should return 2 for example input", async () => {
      expect(await part2Solution(parseInput(exampleInput))).toBe(2);
    });
  });
});
