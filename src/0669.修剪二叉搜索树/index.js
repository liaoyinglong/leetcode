"use strict";
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function (root, L, R) {
    let res = null;
    let cur;
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
        }
        else {
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
        }
        else {
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
const tree0669 = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBU0E7Ozs7O0dBS0c7QUFDSCxNQUFNLE9BQU8sR0FBRyxVQUNkLElBQWtCLEVBQ2xCLENBQVMsRUFDVCxDQUFTO0lBRVQsSUFBSSxHQUFHLEdBQXdCLElBQUksQ0FBQztJQUNwQyxJQUFJLEdBQWlCLENBQUM7SUFFdEIsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtRQUNsQyxHQUFHLEdBQUc7WUFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQztLQUNIO0lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2IsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ1YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNmLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2FBQ2hCO1lBQ0QsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNMLEdBQUcsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDaEM7S0FDRjtJQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNkLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNWLE9BQU8sR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDaEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7YUFDakI7WUFDRCxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQztLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFDRixtQ0FBbUM7QUFDbkMsWUFBWTtBQUNaLFlBQVk7QUFDWixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixRQUFRO0FBQ1IsT0FBTztBQUNQLGFBQWE7QUFDYixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixNQUFNO0FBQ04sS0FBSztBQUVMLE1BQU0sUUFBUSxHQUFpQjtJQUM3QixHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLElBQUk7UUFDVixLQUFLLEVBQUU7WUFDTCxHQUFHLEVBQUUsQ0FBQztZQUNOLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsSUFBSTtnQkFDVixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0QsS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=