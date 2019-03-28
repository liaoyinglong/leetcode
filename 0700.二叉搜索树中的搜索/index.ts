/**
 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

interface TreeNode0700 {
  val: number;
  left: TreeNode0700 | null;
  right: TreeNode0700 | null;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(
  root: TreeNode0700,
  val: number
): TreeNode0700 | null {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.left && root.left.val === val) {
    return root.left;
  }
  if (root.right && root.right.val === val) {
    return root.right;
  }
  return searchBST(root.left!, val) || searchBST(root.right!, val);
};
