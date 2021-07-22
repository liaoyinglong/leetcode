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

interface TreeNode0783 {
  val: number;
  left?: TreeNode0783;
  right?: TreeNode0783;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root: TreeNode0783) {
  const arr: number[] = [];
  const stack = [root];

  let cur: TreeNode0783;

  while (stack.length) {
    cur = stack.pop()!;
    arr.push(cur.val);
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }

  arr.sort((a, b) => a - b);

  const res: number[] = [];

  arr.forEach((item, i) => {
    if (i > arr.length - 2) {
      return;
    }
    res.push(arr[i + 1] - item);
  });

  return [Math.min(...res)];
};

// [90,69,null,49,89,null,52,null,null,null,null]

const tree0783: TreeNode0783 = {
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
