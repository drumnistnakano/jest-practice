import { test, expect } from "@jest/globals";

test("2+2=4", () => {
  expect(2 + 2).toBe(4);
});

test("オブジェクト等価の確認", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("正の数の加算でゼロにならない", () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

test("nullのチェック", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('正規表現で"テスト"に一致する文字列があることをチェック', () => {
  expect("これはテストです。").toMatch(/テスト/);
});

const shopType = ["supermarket", "flowershop", "barber"];

test("店舗一覧に指定の店が含まれるかチェック", () => {
  expect(shopType).toContain("supermarket");
});

function errorTest() {
  throw new Error("エラーですよ。気をつけてください");
}

test("エラーになるかチェック", () => {
  expect(() => {
    errorTest();
  }).toThrow();

  expect(() => {
    errorTest();
  }).toThrow(Error);

  expect(() => {
    errorTest();
  }).toThrow(/エラーですよ/);

  expect(() => {
    errorTest();
  }).toThrow("エラーですよ。気をつけてください");
});
