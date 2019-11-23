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
var reverseList = function(head: ListNode0206) {
  if (!head) return head;

  let next = head.next;
  let res: ListNode0206 = { val: head.val, next: null };
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

interface ListNode0206 {
  val: number;
  next: ListNode0206 | null;
}

let obj: ListNode0206 = {
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
