"use strict";
/**
 给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

 案例 1:

 输入:
     5
    / \
   3   6
  / \   \
 2   4   7
 Target = 9
 输出: True
 案例 2:
 输入:
     5
    / \
   3   6
  / \   \
 2   4   7
 Target = 28
 输出: False
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
    const numMap = new Map();
    const stack = [root];
    let cur;
    while (stack.length) {
        cur = stack.pop();
        let n = k - cur.val;
        if (numMap.has(n)) {
            return true;
        }
        numMap.set(cur.val, true);
        if (cur.right)
            stack.push(cur.right);
        if (cur.left)
            stack.push(cur.left);
    }
    return false;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQkc7QUFRSDs7OztHQUlHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBUyxJQUFrQixFQUFFLENBQVM7SUFDckQsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFDMUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixJQUFJLEdBQWlCLENBQUM7SUFDdEIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ25CLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDcEIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxHQUFHLENBQUMsS0FBSztZQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksR0FBRyxDQUFDLElBQUk7WUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDIn0=