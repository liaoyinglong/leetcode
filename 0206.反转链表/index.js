"use strict";
/**
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head)
        return head;
    let next = head.next;
    let res = { val: head.val, next: null };
    let cur = res;
    while (next) {
        cur = {
            val: next.val,
            next: res
        };
        res = cur;
        next = next.next;
    }
    return res;
};
let obj = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
};
console.log(JSON.stringify(reverseList(obj), null, 4));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHO0FBRUg7Ozs7OztHQU1HO0FBQ0g7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBUyxJQUFrQjtJQUMzQyxJQUFJLENBQUMsSUFBSTtRQUFFLE9BQU8sSUFBSSxDQUFDO0lBRXZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsSUFBSSxHQUFHLEdBQWlCLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3RELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLE9BQU8sSUFBSSxFQUFFO1FBQ1gsR0FBRyxHQUFHO1lBQ0osR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsSUFBSSxFQUFFLEdBQUc7U0FDVixDQUFDO1FBQ0YsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNWLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFPRixJQUFJLEdBQUcsR0FBaUI7SUFDdEIsR0FBRyxFQUFFLENBQUM7SUFDTixJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQztRQUNOLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDO1lBQ04sSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxDQUFDO2dCQUNOLElBQUksRUFBRSxJQUFJO2FBQ1g7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==