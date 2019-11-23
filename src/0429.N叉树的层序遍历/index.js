"use strict";
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
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const res = [];
    if (root) {
        res.push([root.val]);
        const iteration = (node, level) => {
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
const obj0429 = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFRSDs7O0dBR0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFTLElBQWM7SUFDdEMsTUFBTSxHQUFHLEdBQWUsRUFBRSxDQUFDO0lBQzNCLElBQUksSUFBSSxFQUFFO1FBQ1IsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXJCLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBYyxFQUFFLEtBQWEsRUFBRSxFQUFFO1lBQ2xELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDZixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNqQjtnQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzFCLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNwQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQWE7SUFDeEIsR0FBRyxFQUFFLENBQUM7SUFDTixRQUFRLEVBQUU7UUFDUixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM5QyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7UUFDVixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7S0FDWDtDQUNGLENBQUM7QUFFRixJQUFJLFVBQVUsR0FBRztJQUNmLEdBQUcsRUFBRSxHQUFHO0lBQ1IsUUFBUSxFQUFFO1FBQ1I7WUFDRSxHQUFHLEVBQUUsR0FBRztZQUNSLFFBQVEsRUFBRTtnQkFDUixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2dCQUNsQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO2FBQ25DO1lBQ0QsR0FBRyxFQUFFLEVBQUU7U0FDUjtRQUNELEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0tBQ3JFO0lBQ0QsR0FBRyxFQUFFLENBQUM7Q0FDUCxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyJ9