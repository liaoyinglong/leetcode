/**
 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

 示例 1:

 输入: 1->1->2
 输出: 1->2
 示例 2:

 输入: 1->1->2->3->3
 输出: 1->2->3

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
interface ListNode0083 {
  val: number;
  next?: ListNode0083;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head: ListNode0083) {
  let cur = head;
  while (cur) {
    if (cur.val === cur.next?.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next!;
    }
  }
  return head;
};
const listNode0083: ListNode0083 = {
  val: 1,
  next: { val: 1, next: { val: 1 } }
};
const listNode0083_1: ListNode0083 = {
  val: 1,
  next: { val: 1, next: { val: 2 } }
};
console.log(deleteDuplicates(listNode0083));
console.log(deleteDuplicates(listNode0083_1));
