"use strict";
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root)
        return root;
    if (!root.left && !root.right)
        return root;
    if (root.val === p.val || root.val === q.val) {
        return root;
    }
    let pParentArr = [];
    let qParentArr = [];
    const lowestCommonAncestorHelper = (node, targetNode, arr) => {
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
    let bigArr;
    let smallArr;
    if (pParentArr.length > qParentArr.length) {
        bigArr = pParentArr;
        smallArr = qParentArr;
    }
    else {
        bigArr = qParentArr;
        smallArr = pParentArr;
    }
    let cur;
    while ((cur = smallArr.pop())) {
        if (bigArr.find(item => item.val === cur.val)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBOEJBOzs7OztHQUtHO0FBQ0gsSUFBSSxvQkFBb0IsR0FBRyxVQUN6QixJQUFrQixFQUNsQixDQUFlLEVBQ2YsQ0FBZTtJQUVmLElBQUksQ0FBQyxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRTNDLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRTtRQUM1QyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsSUFBSSxVQUFVLEdBQW1CLEVBQUUsQ0FBQztJQUNwQyxJQUFJLFVBQVUsR0FBbUIsRUFBRSxDQUFDO0lBRXBDLE1BQU0sMEJBQTBCLEdBQUcsQ0FDakMsSUFBa0IsRUFDbEIsVUFBd0IsRUFDeEIsR0FBbUIsRUFDVixFQUFFO1FBQ1gsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDMUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDM0QsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7SUFDRiwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hELDBCQUEwQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFaEQsSUFBSSxNQUFzQixDQUFDO0lBQzNCLElBQUksUUFBd0IsQ0FBQztJQUU3QixJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUN6QyxNQUFNLEdBQUcsVUFBVSxDQUFDO1FBQ3BCLFFBQVEsR0FBRyxVQUFVLENBQUM7S0FDdkI7U0FBTTtRQUNMLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDcEIsUUFBUSxHQUFHLFVBQVUsQ0FBQztLQUN2QjtJQUVELElBQUksR0FBNkIsQ0FBQztJQUVsQyxPQUFPLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFO1FBQzdCLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlDLE9BQU8sR0FBRyxDQUFDO1NBQ1o7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRSxJQUFJO1FBQ1YsS0FBSyxFQUFFO1lBQ0wsR0FBRyxFQUFFLEVBQUU7U0FDUjtLQUNGO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFLEVBQUU7UUFDUCxJQUFJLEVBQUU7WUFDSixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7U0FDWjtRQUNELEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIn0=