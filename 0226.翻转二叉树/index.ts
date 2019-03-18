/**
 翻转一棵二叉树。

 示例：

 输入：

         4
      /   \
    2     7
  / \   / \
 1   3 6   9
 输出：

        4
      /   \
    7     2
  / \   / \
 9   6 3   1
 
 */

interface TreeNode0226 {
  val: number;
  left: TreeNode0104 | null;
  right: TreeNode0104 | null;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root: TreeNode0226 | null) {
  if (root) {
    invertTree(root.right);
    invertTree(root.left);
    [root.left, root.right] = [root.right, root.left];
  }

  return root;
};
