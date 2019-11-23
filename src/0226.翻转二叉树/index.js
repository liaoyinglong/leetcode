"use strict";
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
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root) {
        invertTree(root.right);
        invertTree(root.left);
        [root.left, root.right] = [root.right, root.left];
    }
    return root;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBUUg7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBUyxJQUF5QjtJQUNqRCxJQUFJLElBQUksRUFBRTtRQUNSLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkQ7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQyJ9