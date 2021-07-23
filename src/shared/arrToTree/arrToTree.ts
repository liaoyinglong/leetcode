interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function arrToTree(arr: (number | null)[], depth = 0) {
  const v = arr[depth];

  if (v === null || v === undefined) {
    return null;
  }
  const current: TreeNode = {
    val: v,
    left: arrToTree(arr, depth * 2 + 1),
    right: arrToTree(arr, depth * 2 + 2),
  };

  return current;
}
