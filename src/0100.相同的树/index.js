"use strict";
/**
 给定两个二叉树，编写一个函数来检验它们是否相同。

 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

 示例 1:

 输入:       1         1
 / \       / \
 2   3     2   3

 [1,2,3],   [1,2,3]

 输出: true
 示例 2:

 输入:      1          1
 /           \
 2             2

 [1,2],     [1,null,2]

 输出: false
 示例 3:

 输入:       1         1
 / \       / \
 2   1     1   2

 [1,2,1],   [1,1,2]

 输出: false

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/same-tree
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    const stackP = [p];
    const stackQ = [q];
    let curP;
    let curQ;
    while (stackP.length && stackQ.length) {
        curP = stackP.pop();
        curQ = stackQ.pop();
        if (curQ && curP) {
            if (curP.val !== curQ.val) {
                return false;
            }
            else {
                stackP.push(curP.left);
                stackP.push(curP.right);
                stackQ.push(curQ.left);
                stackQ.push(curQ.right);
            }
        }
        else if (curP !== curQ) {
            return false;
        }
    }
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DRztBQWdCSDs7OztHQUlHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBUyxDQUFlLEVBQUUsQ0FBZTtJQUN4RCxNQUFNLE1BQU0sR0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sTUFBTSxHQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUIsSUFBSSxJQUE4QixDQUFDO0lBQ25DLElBQUksSUFBOEIsQ0FBQztJQUVuQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNyQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2hCLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUN6QixPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7YUFBTSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==