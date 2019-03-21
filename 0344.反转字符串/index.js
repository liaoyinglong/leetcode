"use strict";
/**
 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

 示例 1：

 输入：["h","e","l","l","o"]
 输出：["o","l","l","e","h"]
 示例 2：

 输入：["H","a","n","n","a","h"]
 输出：["h","a","n","n","a","H"]
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let start = 0 - 1;
    let end = s.length;
    if (end <= 1)
        return s;
    const isOdd = !!(s.length % 2);
    while (true) {
        start++;
        end--;
        [s[start], s[end]] = [s[end], s[start]];
        if ((isOdd && start === end) || start + 1 === end) {
            console.log(s);
            return;
        }
    }
    // s.reverse();
};
// console.log(reverseString(["h", "e", "l", "l", "o"]));
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
console.log(reverseString(['"']));
// console.log(
//   reverseString([
//     "A",
//     " ",
//     "m",
//     "a",
//     "n",
//     ",",
//     " ",
//     "a",
//     " ",
//     "p",
//     "l",
//     "a",
//     "n",
//     ",",
//     " ",
//     "a",
//     " ",
//     "c",
//     "a",
//     "n",
//     "a",
//     "l",
//     ":",
//     " ",
//     "P",
//     "a",
//     "n",
//     "a",
//     "m",
//     "a"
//   ])
// );
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFXO0lBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFFdkIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUUvQixPQUFPLElBQUksRUFBRTtRQUNYLEtBQUssRUFBRSxDQUFDO1FBQ1IsR0FBRyxFQUFFLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTztTQUNSO0tBQ0Y7SUFDRCxlQUFlO0FBQ2pCLENBQUMsQ0FBQztBQUVGLHlEQUF5RDtBQUN6RCw4REFBOEQ7QUFDOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsZUFBZTtBQUNmLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFdBQVc7QUFDWCxXQUFXO0FBQ1gsV0FBVztBQUNYLFVBQVU7QUFDVixPQUFPO0FBQ1AsS0FBSyJ9