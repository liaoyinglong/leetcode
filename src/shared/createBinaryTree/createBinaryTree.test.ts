import { createBinaryTree, TreeNode } from "./createBinaryTree";

describe("arrToTree", function () {
  it("case1", () => {
    `
3                  
  9                  
    null                  
    null                  
  20                  
    15                  
    7     
    
(0)
  (1)
     (3)
     (4)
  (2)
     (5)
     (6)                 
`;
    const expected = new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    );
    expect(createBinaryTree([3, 9, 20, null, null, 15, 7])).toEqual(expected);
  });

  it("case2", () => {
    `
1
  null
  2
    3
(0)
  1
  2
    3   
    
    
`;
    const expected = new TreeNode(
      1,
      null,

      new TreeNode(2, new TreeNode(3))
    );
    expect(createBinaryTree([1, null, 2, 3])).toEqual(expected);
  });

  it("case3", () => {
    `
2
  null
  3
    null
    4
      null
      5
        null
        6
`;

    expect(createBinaryTree([2, null, 3, null, 4, null, 5, null, 6])).toEqual(
      new TreeNode(
        2,
        null,

        new TreeNode(
          3,
          null,
          new TreeNode(
            4,
            null,

            new TreeNode(
              5,
              null,

              new TreeNode(6)
            )
          )
        )
      )
    );
  });

  it("case4", () => {
    expect(createBinaryTree([2, null, 3, null, 4, null, 5, 6, 7])).toEqual(
      new TreeNode(
        2,
        null,

        new TreeNode(
          3,
          null,
          new TreeNode(
            4,
            null,

            new TreeNode(
              5,

              new TreeNode(6),
              new TreeNode(7)
            )
          )
        )
      )
    );
  });
});
