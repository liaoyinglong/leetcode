import { merge } from "./merge";

describe("测试 0088", () => {
  test("merge.case 1 ", () => {
    const num1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
    merge(num1, 6, [1, 2, 2], 3);
    expect(num1).toStrictEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
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
    const num1 = [4, 5, 6, 0, 0, 0];
    merge(num1, 3, [1, 2, 3], 3);
    expect(num1).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test("merge.case 5", () => {
    const num1 = [0, 0, 3, 0, 0, 0, 0, 0, 0];
    /**
     * [0, 0, 3, 0, 0, 0, 0, 0, 0]
     * [-1, 1, 1, 1, 2, 3]
     *
     * [0, 0, 3, 0, 0, 0, 0, 0, 3]
     * [-1, 1, 1, 1, 2]
     *
     * [0, 0, 0, 0, 0, 0, 0, 3, 3]
     * [-1, 1, 1, 1, 2]
     *
     * [0, 0, 0, 0, 0, 0, 2, 3, 3]
     * [-1, 1, 1, 1]
     *
     * [0, 0, 0, 0, 0, 1, 2, 3, 3]
     * [-1, 1, 1]
     *
     * [0, 0, 0, 0, 1, 1, 2, 3, 3]
     * [-1, 1]
     *
     * [0, 0, 0, 1, 1, 1, 2, 3, 3]
     * [-1]
     *
     * [-1, 0, 0, 1, 1, 1, 2, 3, 3]
     * []
     */
    merge(num1, 3, [-1, 1, 1, 1, 2, 3], 6);
    expect(num1).toStrictEqual([-1, 0, 0, 1, 1, 1, 2, 3, 3]);
  });

  test("merge.case 5", () => {
    const num1 = [-1, -1, 0, 0, 0, 0];
    merge(num1, 4, [-1, 0], 2);
    expect(num1).toStrictEqual([-1, -1, -1, 0, 0, 0]);
  });
});
