"use strict";
// class ListNode3<T = string> {
//   next: null | ListNode3<T> = null;
//   constructor(public val: T) {}
//   static fromArr<T = string>(arr: T[]) {
//     let head: null | ListNode3<T> = null;
//     let current: null | ListNode3<T> = null;
//     arr.forEach(item => {
//       if (head) {
//         current!.next = new ListNode3(item);
//         current = current!.next;
//       } else {
//         head = new ListNode3(item);
//         current = head;
//       }
//     });
//     return head;
//   }
// }
// console.log(ListNode3.fromArr('pwwkew'.split('')));
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const arr = s.split('');
    const { length } = arr;
    const countMap = new Map();
    const nonRepeatingArr = [...new Set(arr)];
    if (nonRepeatingArr.length <= 2)
        return nonRepeatingArr.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j <= length; j++) {
            const str = s.slice(i, j);
            if (s.includes(str) && str.length === [...new Set(str)].length) {
                countMap.set(str, str.length);
            }
        }
    }
    return Math.max(...countMap.values());
};
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring('pwkew'));
// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('abcabcbbd'));
console.log(lengthOfLongestSubstring('dvdf'));
