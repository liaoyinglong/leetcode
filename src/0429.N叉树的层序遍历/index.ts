/**
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。

例如，给定一个 3叉树 :
                  1
               /  \  \
              3    2  4
            /  \
          5    6
返回其层序遍历:
[
     [1],
     [3,2,4],
     [5,6]
]
 */

interface Node0429 {
  $id?: any;
  val: number;
  children?: Node0429[];
}

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root: Node0429): number[][] {
  const res: number[][] = [];
  if (root) {
    res.push([root.val]);

    const iteration = (node: Node0429, level: number) => {
      if (node.children && node.children.length) {
        if (!res[level]) {
          res[level] = [];
        }
        node.children.forEach(item => {
          res[level].push(item.val);
          iteration(item, level + 1);
        });
      }
    };
    iteration(root, 1);
  }

  return res;
};

const obj0429: Node0429 = {
  val: 1,
  children: [
    { val: 3, children: [{ val: 5 }, { val: 6 }] },
    { val: 2 },
    { val: 4 }
  ]
};

var obj0429obj = {
  $id: '1',
  children: [
    {
      $id: '2',
      children: [
        { $id: '3', children: [], val: 5 },
        { $id: '4', children: [], val: 0 }
      ],
      val: 10
    },
    { $id: '5', children: [{ $id: '6', children: [], val: 6 }], val: 3 }
  ],
  val: 1
};

console.log(levelOrder(obj0429obj));
