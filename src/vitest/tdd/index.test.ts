import { expect, test } from "vitest";
import { sum, refactoredSum } from "./index";

test("adds 1 + 2 to not equal 4", () => {
  expect(sum(1, 2)).not.toBe(4);
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 2 to equal 3", () => {
  expect(refactoredSum(1, 2)).toBe(3);
});
