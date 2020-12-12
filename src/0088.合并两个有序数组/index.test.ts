import { merge } from "./merge";

test("merge.case 1 ", () => {
  const num1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
  merge(num1, 6, [1, 2, 2], 3);
  expect(num1).toStrictEqual([1, 2, 2, 3, 5, 6]);
});

test("merge.case 2", () => {
  const num1 = [1, 2, 3, 0, 0, 0];
  merge(num1, 3, [2, 5, 6], 3);
  expect(num1).toStrictEqual([1, 2, 2, 3, 5, 6]);
});
test("merge.case 3", () => {
  const num1 = [0];
  merge(num1, 0, [1], 1);
  expect(num1).toStrictEqual([1]);
});
test("merge.case 4", () => {
  const num1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
  merge(num1, 6, [1, 2, 2], 3);
  expect(num1).toStrictEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
});
