"use strict";
/*
给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。

你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。

示例 1:

输入:
  Tree 1                     Tree 2
     1                         2
    / \                       / \
   3   2                    1   3
 /                          \   \
5                           4   7
输出:
  合并后的树:
     3
    / \
     4   5
/ \    \
5  4   7
注意: 合并必须从两个树的根节点开始。
*/
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (t1 && t2) {
        t1.val = t1.val + t2.val;
        t1.left = mergeTrees(t1.left, t2.left);
        t1.right = mergeTrees(t1.right, t2.right);
        return t1;
    }
    if (t1 && !t2) {
        return t1;
    }
    if (!t1 && t2) {
        return t2;
    }
    return t1;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFzQkU7QUFlRjs7OztHQUlHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBUyxFQUFtQixFQUFFLEVBQW1CO0lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNaLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQyJ9