import { describe, test, expect } from "@jest/globals";
import { sum } from "./sum";

describe("sum関数のテスト", () => {
  test("1+2は3になる", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
