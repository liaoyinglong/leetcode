/**
 给定一个 N 叉树，返回其节点值的后序遍历。

 例如，给定一个 3叉树 :
           1
     /     \  \
   3       2   4
 /   \
5     6
 返回其后序遍历: [5,6,3,2,4,1].
 */

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
interface Node0590 {
  val: number;
  children: Node0590[];
}

/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = function(root: Node0590): any {
  if (!root) return [];
  let arr = root.children.reduce<number[]>((arr, cur) => {
    return [...arr, ...postorder(cur)];
  }, []);
  arr.push(root.val);
  return arr;
};

const node = {
  children: [
    {
      children: [{ children: [], val: 5 }, { children: [], val: 6 }],
      val: 3
    },
    { children: [], val: 2 },
    { children: [], val: 4 }
  ],
  val: 1
};

console.log(postorder(node));
