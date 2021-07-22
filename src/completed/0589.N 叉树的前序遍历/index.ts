interface Node0589 {
  val: number;
  children: Node0589[];
}
/**
 给定一个 N 叉树，返回其节点值的前序遍历。
 
 例如，给定一个 3叉树 :
          1
      /  \   \
    3    2   4 
 /   \
5    6

 返回其前序遍历: [1,3,5,6,2,4]。
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root: Node0589): number[] {
  if (!root) return [];
  let arr: number[] = [];
  root.children.forEach(item => {
    arr = [...arr, ...preorder(item)];
  });
  arr.unshift(root.val);
  return arr;
};

const node0589 = {
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

console.log(preorder(node0589)); // [ 1,3,5,6,2,4 ]
