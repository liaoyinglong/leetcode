"use strict";
/**
 给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。
 二叉搜索树保证具有唯一的值。
 示例 1：
 输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
 输出：32
 
 示例 2：
 输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 输出：23
 
 提示：
 树中的结点数量最多为 10000 个。
 最终的答案保证小于 2^31。
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    let res = 0;
    if (root) {
        if (root.left) {
            res += rangeSumBST(root.left, L, R);
        }
        if (root.right) {
            res += rangeSumBST(root.right, L, R);
        }
        if (root.val >= L && root.val <= R) {
            res += root.val;
        }
    }
    return res;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFPSDs7Ozs7R0FLRztBQUNILElBQUksV0FBVyxHQUFHLFVBQVMsSUFBa0IsRUFBRSxDQUFTLEVBQUUsQ0FBUztJQUNqRSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLElBQUksRUFBRTtRQUNSLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtZQUNsQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQztTQUNqQjtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUMifQ==