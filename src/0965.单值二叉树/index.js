"use strict";
/**
 如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

 只有给定的树是单值二叉树时，才返回 true；否则返回 false。
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = function (root) {
    if (!root)
        return true;
    if (root.left && root.val !== root.left.val) {
        return false;
    }
    if (root.right && root.val !== root.right.val) {
        return false;
    }
    return isUnivalTree(root.left) && isUnivalTree(root.right);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7R0FJRztBQWdCSDs7O0dBR0c7QUFDSCxNQUFNLFlBQVksR0FBRyxVQUFTLElBQWtCO0lBQzlDLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFFdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDM0MsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUNELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFNLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMifQ==