"use strict";
/**
 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

 说明: 叶子节点是指没有子节点的节点。

 示例:
 给定如下二叉树，以及目标和 sum = 22，

 5
 / \
 4   8
 /   / \
 11  13  4
 /  \      \
 7    2      1
 返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/path-sum
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 开始想要提前return，想尽快结束遍历，结果发现没有很好的结束条件。
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function (root, target, sum = 0) {
    if (!root) {
        return false;
    }
    if (!root.left && !root.right && root.val + sum === target) {
        return true;
    }
    let isLeft = false;
    let isRight = false;
    if (root.left) {
        isLeft = hasPathSum(root.left, target, root.val + sum);
    }
    if (root.right) {
        isRight = hasPathSum(root.right, target, root.val + sum);
    }
    return isLeft || isRight;
};
const tree0112 = {
    val: 5,
    left: {
        val: 4,
        left: {
            val: 11,
            left: { val: 7 },
            right: { val: 2 }
        }
    },
    right: {
        val: 8,
        left: { val: 13 },
        right: { val: 4, left: { val: 1 } }
    }
};
const tree0112_1 = {
    val: 1,
    left: {
        val: -2
    },
    right: {
        val: 3
    }
};
// console.log(hasPathSum(tree0112, 22));
console.log(hasPathSum(tree0112_1, -1));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBQ0g7Ozs7OztHQU1HO0FBUUg7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLEdBQUcsVUFDakIsSUFBa0IsRUFDbEIsTUFBYyxFQUNkLEdBQUcsR0FBRyxDQUFDO0lBRVAsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssTUFBTSxFQUFFO1FBQzFELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDbkIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtRQUNiLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUN4RDtJQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztLQUMxRDtJQUVELE9BQU8sTUFBTSxJQUFJLE9BQU8sQ0FBQztBQUMzQixDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBaUI7SUFDN0IsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUNoQixLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO1NBQ2xCO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUU7UUFDakIsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7S0FDcEM7Q0FDRixDQUFDO0FBQ0YsTUFBTSxVQUFVLEdBQWlCO0lBQy9CLEdBQUcsRUFBRSxDQUFDO0lBQ04sSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNSO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGLENBQUM7QUFFRix5Q0FBeUM7QUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9