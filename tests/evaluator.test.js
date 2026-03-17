import { evaluateModel } from "../core/evaluator.js";

test("should calculate accuracy correctly", () => {
  const result = evaluateModel([1, 2, 3], [1, 2, 4]);
  expect(result.accuracy).toBe(2 / 3);
});
