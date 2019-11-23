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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

interface TreeNode0100 {
  val: number;
  left?: TreeNode0100;
  right?: TreeNode0100;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p: TreeNode0100, q: TreeNode0100) {
  const stackP: any[] = [p];
  const stackQ: any[] = [q];

  let curP: TreeNode0100 | undefined;
  let curQ: TreeNode0100 | undefined;

  while (stackP.length && stackQ.length) {
    curP = stackP.pop();
    curQ = stackQ.pop();
    if (curQ && curP) {
      if (curP.val !== curQ.val) {
        return false;
      } else {
        stackP.push(curP.left);
        stackP.push(curP.right);

        stackQ.push(curQ.left);
        stackQ.push(curQ.right);
      }
    } else if (curP !== curQ) {
      return false;
    }
  }

  return true;
};
