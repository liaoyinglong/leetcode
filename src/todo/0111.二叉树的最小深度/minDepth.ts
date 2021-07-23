/**
 111. 二叉树的最小深度
 给定一个二叉树，找出其最小深度。

 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

 说明：叶子节点是指没有子节点的节点。
 */

export function minDepth(root: TreeNode | null, min = 1): number {
  // if (!root) {
  //   return min - 1;
  // }
  //
  // const left = minDepth(root.left, min + 1);
  // const right = minDepth(root.right, min + 1);
  //
  // if (!root.left && !root.right) {
  //   return min;
  // }
  //
  // return Math.min(left, right);
  if (!root) {
    return min - 1;
  }
  if (!root.left && !root.right) {
    return min;
  }

  const leftMin = minDepth(root.left, min + 1);
  const rightMin = minDepth(root.right, min + 1);

  if (!root.left) {
    return rightMin;
  }
  if (!root.right) {
    return leftMin;
  }

  return Math.min(leftMin, rightMin);
}
