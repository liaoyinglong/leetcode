"use strict";
/**
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root, level = 0, res = []) {
    if (root) {
        levelOrderBottom(root.left, level + 1, res);
        levelOrderBottom(root.right, level + 1, res);
        if (level) {
            while (res.length < level) {
                res.unshift([]);
            }
            const index = res.length - level;
            (res[index] || (res[index] = [])).push(root.val);
        }
        else {
            res.push([root.val]);
        }
    }
    return res;
};
const tree0107 = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: null
    }
};
console.log(levelOrderBottom(tree0107));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQVFIOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFDckIsSUFBeUIsRUFDekIsS0FBSyxHQUFHLENBQUMsRUFDVCxNQUFrQixFQUFFO0lBRXBCLElBQUksSUFBSSxFQUFFO1FBQ1IsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QyxJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDakI7WUFDRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNqQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEQ7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0QjtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLEdBQUcsRUFBRSxDQUFDO0lBQ04sSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFDRCxLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMifQ==