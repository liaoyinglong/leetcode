import { arrToTree } from "./arrToTree";

describe("arrToTree", function () {
  it("生成正确", () => {
    expect(arrToTree([3, 9, 20, null, null, 15, 7])).toMatchObject({
      val: 3,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    });
  });

  // FIXME: 还不满足
  it("左叶子为空，右叶子不为空", () => {
    expect(arrToTree([2, null, 3, null, 4, null, 5, null, 6])).toMatchObject({
      val: 2,
      left: null,
      right: {
        val: 3,
        left: null,
        right: {
          val: 4,
          left: null,
          right: {
            val: 5,
            left: null,
            right: {
              val: 6,
              left: null,
              right: null,
            },
          },
        },
      },
    });
  });
});
