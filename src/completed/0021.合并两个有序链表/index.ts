/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (53.60%)
 * Total Accepted:    56.2K
 * Total Submissions: 104.8K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
interface ListNode0021 {
  val: number;
  next: willNull<ListNode0021>;
}
type willNull<T> = T | null;

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(
  l1: willNull<ListNode0021>,
  l2: willNull<ListNode0021>
): willNull<ListNode0021> {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let cur1 = l1;
  let cur2: willNull<ListNode0021> = l2;

  const setCur1Val = (val: number) => {
    if (cur1.val >= val) {
      // 往前插入
      [cur1.val, val] = [val, cur1.val];
      cur1.next = {
        val,
        next: cur1.next
      };
    } else if (cur1.next) {
      cur1 = cur1.next;
      setCur1Val(val);
    } else {
      cur1.next = {
        val,
        next: cur1.next
      };
    }
  };

  while (cur2) {
    setCur1Val(cur2.val);
    cur2 = cur2.next;
  }

  return l1;
};

let l10021: ListNode0021 = {
  val: -2,
  next: {
    val: 5,
    next: null
  }
};

let l20021: ListNode0021 = {
  val: -9,
  next: {
    val: -6,
    next: {
      val: -2,
      next: {
        val: -3,
        next: null
      }
    }
  }
};

console.log(JSON.stringify(mergeTwoLists(l10021, l20021), null, 4));

// var mergeTwoLists = function(l1, l2) {
//   if (l1 === null) {
//     return l2;
//   }
//   if (l2 === null) {
//     return l1;
//   }
//   if(l1.val<=l2.val) {
//     l1.next = mergeTwoLists(l1.next,l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1,l2.next);
//     return l2;
//   }
// };
