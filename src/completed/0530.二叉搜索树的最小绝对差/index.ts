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

interface TreeNode0530 {
  val: number;
  left: TreeNode0530 | null;
  right: TreeNode0530 | null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root: TreeNode0530): number {
  const stack: TreeNode0530[] = [root];
  const numberArr: number[] = [];
  let cur: TreeNode0530;

  while (stack.length) {
    cur = stack.pop()!;
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
    if (absN < min) min = absN;
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
