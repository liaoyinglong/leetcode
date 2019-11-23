/**
 给定一个二叉搜索树，同时给定最小边界L 和最大边界 R。通过修剪二叉搜索树，使得所有节点的值在[L, R]中 (R>=L) 。你可能需要改变树的根节点，所以结果应当返回修剪好的二叉搜索树的新的根节点。
 */
interface TreeNode0669 {
  val: number;
  left: null | TreeNode0669;
  right: null | TreeNode0669;
}

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(
  root: TreeNode0669,
  L: number,
  R: number
): null | TreeNode0669 {
  let res: TreeNode0669 | null = null;
  let cur: TreeNode0669;

  if (root.val >= L && root.val <= R) {
    res = {
      val: root.val,
      left: null,
      right: null
    };
  }
  if (root.left) {
    if (res) {
      cur = res;
      while (cur.left) {
        cur = cur.left;
      }
      cur.left = trimBST(root.left, L, R);
    } else {
      res = trimBST(root.left, L, R);
    }
  }
  if (root.right) {
    if (res) {
      cur = res;
      while (cur.right) {
        cur = cur.right;
      }
      cur.right = trimBST(root.right, L, R);
    } else {
      res = trimBST(root.right, L, R);
    }
  }

  return res;
};
// const tree0669: TreeNode0669 = {
//   val: 3,
//   left: {
//     val: 1,
//     left: null,
//     right: {
//       val: 2,
//       left: null,
//       right: null
//     }
//   },
//   right: {
//     val: 4,
//     left: null,
//     right: null
//   }
// };

const tree0669: TreeNode0669 = {
  val: 3,
  left: {
    val: 0,
    left: null,
    right: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
};

console.log(JSON.stringify(trimBST(tree0669, 1, 3), null, 4));
