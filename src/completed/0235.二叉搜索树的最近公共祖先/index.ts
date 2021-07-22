/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */
/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”
例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
示例 1:
输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
interface TreeNode0235 {
  val: number;
  left?: TreeNode0235 | null;
  right?: TreeNode0235 | null;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(
  root: TreeNode0235,
  p: TreeNode0235,
  q: TreeNode0235
) {
  if (!root) return root;
  if (!root.left && !root.right) return root;

  if (root.val === p.val || root.val === q.val) {
    return root;
  }

  let pParentArr: TreeNode0235[] = [];
  let qParentArr: TreeNode0235[] = [];

  const lowestCommonAncestorHelper = (
    node: TreeNode0235,
    targetNode: TreeNode0235,
    arr: TreeNode0235[]
  ): boolean => {
    if (node.left) {
      if (lowestCommonAncestorHelper(node.left, targetNode, arr)) {
        arr.unshift(node);
        return true;
      }
    }
    if (node.right) {
      if (lowestCommonAncestorHelper(node.right, targetNode, arr)) {
        arr.unshift(node);
        return true;
      }
    }
    if (node.val === targetNode.val) {
      arr.unshift(node);
      return true;
    }
    return false;
  };
  lowestCommonAncestorHelper(root, p, pParentArr);
  lowestCommonAncestorHelper(root, q, qParentArr);

  let bigArr: TreeNode0235[];
  let smallArr: TreeNode0235[];

  if (pParentArr.length > qParentArr.length) {
    bigArr = pParentArr;
    smallArr = qParentArr;
  } else {
    bigArr = qParentArr;
    smallArr = pParentArr;
  }

  let cur: TreeNode0235 | undefined;

  while ((cur = smallArr.pop())) {
    if (bigArr.find(item => item.val === cur!.val)) {
      return cur;
    }
  }
};

const tree0235 = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: {
      val: 11
    }
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

console.log(lowestCommonAncestor(tree0235, { val: 11 }, { val: 7 }));
