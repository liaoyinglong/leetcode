/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
interface TreeNode0108 {
  val: number;
  left: TreeNode0108 | null;
  right: TreeNode0108 | null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode0108}
 */
var sortedArrayToBST = function(nums: number[]) {
  if (!nums.length) return null;
  let start1 = 0;
  let end1 = Math.floor(nums.length / 2);

  let start2 = end1 + 1;
  let end2 = nums.length;

  let node: TreeNode0108 = {
    val: nums[end1],
    left: sortedArrayToBST(nums.slice(start1, end1)),
    right: sortedArrayToBST(nums.slice(start2, end2))
  };

  return node;
};

// console.log(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9]), null, 4));
console.log(JSON.stringify(sortedArrayToBST([-10, -3, 0, 5, 9, 15]), null, 4));
