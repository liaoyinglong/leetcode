/**
 给定一个二叉树，找出其最大深度。

 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

 说明: 叶子节点是指没有子节点的节点。

 示例：
 给定二叉树 [3,9,20,null,null,15,7]，

    3
  / \
 9  20
   /  \
   15   7
 返回它的最大深度 3 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
interface TreeNode0104 {
  val: number;
  left: TreeNode0104 | null;
  right: TreeNode0104 | null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root: TreeNode0104 | null): number {
  let leftDepth = 0;
  let rightDepth = 0;
  if (root) {
    if (root.left) leftDepth++;
    if (root.right) rightDepth++;
    // 最后一个节点
    if (!root.left && !root.right) {
      leftDepth++;
      rightDepth++;
    }
    leftDepth = leftDepth + maxDepth(root.left);
    rightDepth = rightDepth + maxDepth(root.right);
  }
  return Math.max(leftDepth, rightDepth);
};

const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};
const tree1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: null
};
console.log(maxDepth(tree)); // 3
console.log(maxDepth(tree1)); // 2
