"use strict";
/**
 给定一个二叉树，找出其最大深度。

 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

 说明: 叶子节点是指没有子节点的节点。

 示例：
 给定二叉树 [3,9,20,null,null,15,7]，

    3
  / \
 9  20
   /  \
   15   7
 返回它的最大深度 3 。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    let leftDepth = 0;
    let rightDepth = 0;
    if (root) {
        if (root.left)
            leftDepth++;
        if (root.right)
            rightDepth++;
        // 最后一个节点
        if (!root.left && !root.right) {
            leftDepth++;
            rightDepth++;
        }
        leftDepth = leftDepth + maxDepth(root.left);
        rightDepth = rightDepth + maxDepth(root.right);
    }
    return Math.max(leftDepth, rightDepth);
};
const tree = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};
const tree1 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: null
};
console.log(maxDepth(tree)); // 3
console.log(maxDepth(tree1)); // 2
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFlSDs7O0dBR0c7QUFDSCxNQUFNLFFBQVEsR0FBRyxVQUFTLElBQXlCO0lBQ2pELElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLElBQUksQ0FBQyxJQUFJO1lBQUUsU0FBUyxFQUFFLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLFVBQVUsRUFBRSxDQUFDO1FBQzdCLFNBQVM7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsU0FBUyxFQUFFLENBQUM7WUFDWixVQUFVLEVBQUUsQ0FBQztTQUNkO1FBQ0QsU0FBUyxHQUFHLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLFVBQVUsR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoRDtJQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUc7SUFDWCxHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7Q0FDRixDQUFDO0FBQ0YsTUFBTSxLQUFLLEdBQUc7SUFDWixHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUkifQ==