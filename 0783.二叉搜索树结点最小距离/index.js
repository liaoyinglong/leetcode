"use strict";
/**
 给定一个二叉搜索树的根结点 root, 返回树中任意两节点的差的最小值。

 示例：

 输入: root = [4,2,6,1,3,null,null]
 输出: 1
 解释:
 注意，root是树结点对象(TreeNode object)，而不是数组。

 给定的树 [4,2,6,1,3,null,null] 可表示为下图:

        4
      /   \
    2      6
   / \
 1   3

 最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
    const arr = [];
    const stack = [root];
    let cur;
    while (stack.length) {
        cur = stack.pop();
        arr.push(cur.val);
        if (cur.right)
            stack.push(cur.right);
        if (cur.left)
            stack.push(cur.left);
    }
    arr.sort((a, b) => a - b);
    const res = [];
    arr.forEach((item, i) => {
        if (i > arr.length - 2) {
            return;
        }
        res.push(arr[i + 1] - item);
    });
    return [Math.min(...res)];
};
// [90,69,null,49,89,null,52,null,null,null,null]
const tree0783 = {
    val: 90,
    left: {
        val: 69,
        left: {
            val: 49
        },
        right: {
            val: 89
        }
    }
};
console.log(minDiffInBST(tree0783)); // 1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFPSDs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFTLElBQWtCO0lBQzVDLE1BQU0sR0FBRyxHQUFhLEVBQUUsQ0FBQztJQUN6QixNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJCLElBQUksR0FBaUIsQ0FBQztJQUV0QixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDbkIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLEdBQUcsQ0FBQyxLQUFLO1lBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxHQUFHLENBQUMsSUFBSTtZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUxQixNQUFNLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFFekIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPO1NBQ1I7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0FBRUYsaURBQWlEO0FBRWpELE1BQU0sUUFBUSxHQUFpQjtJQUM3QixHQUFHLEVBQUUsRUFBRTtJQUNQLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxFQUFFO1FBQ1AsSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNELEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRSxFQUFFO1NBQ1I7S0FDRjtDQUNGLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSJ9