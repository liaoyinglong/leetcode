/**
 给定一个 N 叉树，找到其最大深度。

 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

interface Node0559 {
  val: number;
  children: Node0559[];
}
/**
 * @param {Node} root
 * @return {number}
 */
const maxDepth0559 = function(root: Node0559): number {
  if (!root) return 0;
  if (!root.children.length) return 1;
  return 1 + Math.max(...root.children.map(maxDepth0559));
};

let tree0559: Node0559 = {
  val: 1,
  children: [
    { val: 2, children: [{ val: 3, children: [] }] },
    { val: 4, children: [{ val: 5, children: [] }] },
    {
      val: 6,
      children: [
        { val: 7, children: [{ val: 8, children: [{ val: 9, children: [] }] }] }
      ]
    }
  ]
};

console.log(maxDepth0559(tree0559)); // 3
