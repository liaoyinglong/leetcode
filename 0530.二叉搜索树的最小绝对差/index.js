"use strict";
/**
 * 给定一个所有节点为非负值的二叉搜索树，求树中任意两节点的差的绝对值的最小值。

示例 :

输入:

   1
    \
     3
    /
   2

输出:
1

解释:
最小绝对差为1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    const stack = [root];
    const numberArr = [];
    let cur;
    while (stack.length) {
        cur = stack.pop();
        if (cur.right) {
            stack.push(cur.right);
        }
        if (cur.left) {
            stack.push(cur.left);
        }
        numberArr.push(cur.val);
    }
    let min = Number.MAX_SAFE_INTEGER;
    numberArr.sort((a, b) => {
        let n = a - b;
        let absN = Math.abs(n);
        if (absN < min)
            min = absN;
        return n;
    });
    return min;
};
const tree0530 = {
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
console.log(getMinimumDifference(tree0530)); // 2    9-7=2
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFRSDs7O0dBR0c7QUFDSCxJQUFJLG9CQUFvQixHQUFHLFVBQVMsSUFBa0I7SUFDcEQsTUFBTSxLQUFLLEdBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsTUFBTSxTQUFTLEdBQWEsRUFBRSxDQUFDO0lBQy9CLElBQUksR0FBaUIsQ0FBQztJQUV0QixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDbkIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztRQUNuQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QjtRQUNELElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtZQUNaLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekI7SUFFRCxJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7SUFFbEMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxHQUFHO1lBQUUsR0FBRyxHQUFHLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLEdBQUcsRUFBRSxDQUFDO0lBQ04sSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxLQUFLLEVBQUU7UUFDTCxHQUFHLEVBQUUsRUFBRTtRQUNQLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxFQUFFO1lBQ1AsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsS0FBSyxFQUFFO1lBQ0wsR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1o7S0FDRjtDQUNGLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhIn0=