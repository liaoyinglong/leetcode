import { plusOne } from "./plusOne";

describe("66. 加一", () => {
  test("merge.case 1 ", () => {
    expect(plusOne([1, 2, 3])).toStrictEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
    expect(plusOne([9, 9])).toStrictEqual([1, 0, 0]);
  });
});
