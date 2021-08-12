import { minDepth } from "./minDepth";
import { createBinaryTree } from "../../shared/createBinaryTree/createBinaryTree";

describe("minDepth", function () {
  it("minDepth case1", () => {
    expect(minDepth(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toBe(2);
  });

  it("minDepth case2", () => {
    expect(
      minDepth({
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
      })
    ).toBe(5);
  });

  it("case 3 ", () => {
    expect(minDepth(createBinaryTree([]))).toBe(0);
  });
});
