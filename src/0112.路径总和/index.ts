/**
 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

 说明: 叶子节点是指没有子节点的节点。

 示例: 
 给定如下二叉树，以及目标和 sum = 22，

 5
 / \
 4   8
 /   / \
 11  13  4
 /  \      \
 7    2      1
 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/path-sum
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

interface TreeNode0112 {
  val: number;
  left?: TreeNode0112;
  right?: TreeNode0112;
}

/**
 * 开始想要提前return，想尽快结束遍历，结果发现没有很好的结束条件。
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(
  root: TreeNode0112,
  target: number,
  sum = 0
): boolean {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right && root.val + sum === target) {
    return true;
  }

  let isLeft = false;
  let isRight = false;
  if (root.left) {
    isLeft = hasPathSum(root.left, target, root.val + sum);
  }
  if (root.right) {
    isRight = hasPathSum(root.right, target, root.val + sum);
  }

  return isLeft || isRight;
};

const tree0112: TreeNode0112 = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7 },
      right: { val: 2 }
    }
  },
  right: {
    val: 8,
    left: { val: 13 },
    right: { val: 4, left: { val: 1 } }
  }
};
const tree0112_1: TreeNode0112 = {
  val: 1,
  left: {
    val: -2
  },
  right: {
    val: 3
  }
};

// console.log(hasPathSum(tree0112, 22));
console.log(hasPathSum(tree0112_1, -1));
