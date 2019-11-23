"use strict";
/**
 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
    if (!root)
        return null;
    if (root.val === val)
        return root;
    if (root.left && root.left.val === val) {
        return root.left;
    }
    if (root.right && root.right.val === val) {
        return root.right;
    }
    return searchBST(root.left, val) || searchBST(root.right, val);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFnQkg7Ozs7R0FJRztBQUNILE1BQU0sU0FBUyxHQUFHLFVBQ2hCLElBQWtCLEVBQ2xCLEdBQVc7SUFFWCxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDbEMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7SUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztLQUNuQjtJQUNELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFLLEVBQUUsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDbkUsQ0FBQyxDQUFDIn0=