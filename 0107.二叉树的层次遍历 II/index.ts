/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
 */

interface TreeNode0107 {
  val: number;
  left: TreeNode0107 | null;
  right: TreeNode0107 | null;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(
  root: TreeNode0107 | null,
  level = 0,
  res: number[][] = []
): number[][] {
  if (root) {
    levelOrderBottom(root.left, level + 1, res);
    levelOrderBottom(root.right, level + 1, res);
    if (level) {
      while (res.length < level) {
        res.unshift([]);
      }
      const index = res.length - level;
      (res[index] || (res[index] = [])).push(root.val);
    } else {
      res.push([root.val]);
    }
  }

  return res;
};

const tree0107 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  }
};

console.log(levelOrderBottom(tree0107));
