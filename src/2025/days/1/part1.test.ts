import { parseInput, part1Solution } from "./part1";

describe("day 1", () => {
  describe("parseInput", () => {
    test("given the raw input text, should return instuctions", () => {
      expect(
        parseInput(`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`)
      ).toStrictEqual([
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
      ]);
    });
  });

  describe("part1", () => {
    it("should rotate left", () => {
      expect(part1Solution(["L1"]).currentNumber).toBe(49);
    });

    it("should rotate right", () => {
      expect(part1Solution(["R1"]).currentNumber).toBe(51);
    });

    it("should land on zero", () => {
      expect(part1Solution(["R50"]).currentNumber).toBe(0);
      expect(part1Solution(["L50"]).currentNumber).toBe(0);
    });

    it("should go past zero", () => {
      expect(part1Solution(["R51"]).currentNumber).toBe(1);
      expect(part1Solution(["L51"]).currentNumber).toBe(99);
    });

    it("should handle large spins", () => {
      expect(part1Solution(["L100"]).currentNumber).toBe(50);
      expect(part1Solution(["L100"]).currentNumber).toBe(50);
    });

    it("should count times landed on 0", () => {
      expect(
        part1Solution([
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
      ).toBe(3);
    });
  });
});
