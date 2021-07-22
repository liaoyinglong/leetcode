/**
 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

interface TreeNode0965 {
  val: number;
  left?: TreeNode0965;
  right?: TreeNode0965;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = function(root: TreeNode0965): boolean {
  if (!root) return true;

  if (root.left && root.val !== root.left.val) {
    return false;
  }
  if (root.right && root.val !== root.right.val) {
    return false;
  }

  return isUnivalTree(root.left!) && isUnivalTree(root.right!);
};
