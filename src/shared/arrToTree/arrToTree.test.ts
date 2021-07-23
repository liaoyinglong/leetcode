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
});
