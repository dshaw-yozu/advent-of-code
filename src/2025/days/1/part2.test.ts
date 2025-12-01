import { part2Solution } from "./part2";

describe("part2", () => {
  it("counts number of times 0 is crossed", () => {
    expect(
      part2Solution([
        "L68",
        "L30",
        "R48",
        "L5",
        "R60",
        "L55",
        "L1",
        "L99",
        "R14",
        "L82",
      ]).zeroCount
    ).toBe(6);
  });

  it("handles big spins", () => {
    expect(part2Solution(["L150"]).zeroCount).toBe(2);
  });
});
