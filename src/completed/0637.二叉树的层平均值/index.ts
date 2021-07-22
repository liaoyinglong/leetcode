/**
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.

示例 1:

输入:
    3
   / \
  9  20
    /  \
   15   7
输出: [3, 14.5, 11]
解释:
第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
 */

interface TreeNode0637 {
  val: number;
  left?: TreeNode0637 | null;
  right?: TreeNode0637 | null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root: TreeNode0637) {
  if (!root) return [];
  const rows: number[][] = [];
  const res: number[] = [];
  const rowSums: number[] = [];
  averageOfLevelsHelpers(root, res, rowSums, rows, 0);
  return res;
};

const averageOfLevelsHelpers = (
  root: TreeNode0637,
  res: number[],
  rowSums: number[],
  rows: number[][] = [],
  level = 0
) => {
  if (rows[level]) {
    rows[level].push(root.val);
    rowSums[level] = rowSums[level] + root.val;
    res[level] = rowSums[level] / rows[level].length;
  } else {
    rows[level] = [root.val];
    rowSums[level] = root.val;
    res[level] = root.val;
  }
  root.left && averageOfLevelsHelpers(root.left, res, rowSums, rows, level + 1);
  root.right &&
    averageOfLevelsHelpers(root.right, res, rowSums, rows, level + 1);
};

const tree0637: TreeNode0637 = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
};

console.log(averageOfLevels(tree0637));
