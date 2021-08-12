export class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}

  static padStartSpace(count: number) {
    return new Array(count).fill("    ").join("");
  }

  static getLogStr(root: TreeNode | null, depth = 1): string {
    if (!root) {
      return "null";
    }
    return [
      root.val,
      `${TreeNode.padStartSpace(depth)}${TreeNode.getLogStr(
        root.left,
        depth + 1
      )}`,
      `${TreeNode.padStartSpace(depth)}${TreeNode.getLogStr(
        root.right,
        depth + 1
      )}`,
    ].join("\n");
  }

  toString() {
    return TreeNode.getLogStr(this);
  }
}
type SourceData = (number | null)[];

export function createBinaryTree(
  arr: SourceData,
  index = 0,
  flag = false
): TreeNode | null {
  const v = arr[index];

  if (v === null || v === undefined) {
    return null;
  }

  // 找到了最后一个右节点 不需要在往下递归创建子节点了
  const rightNodeIndex = flag ? index + 2 : 2 * index + 2;

  const leftNodeIndex = flag ? index + 1 : 2 * index + 1;

  const leftNode = createBinaryTree(
    arr,
    leftNodeIndex,
    rightNodeIndex === arr.length - 1 ? false : flag
  );

  const rightNode = createBinaryTree(
    arr,

    rightNodeIndex,
    leftNode === null
  );

  return new TreeNode(v, leftNode, rightNode);
}
