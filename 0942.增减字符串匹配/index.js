/**
 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。

 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：

 如果 S[i] == "I"，那么 A[i] < A[i+1]
 如果 S[i] == "D"，那么 A[i] > A[i+1]

 提示：
 1 <= S.length <= 1000
 S 只包含字符 "I" 或 "D"
 */
/**
 * 思路：
 * 输入 IDID
 * N = 4  A = [0,1,2,3,4]
 * 遍历 S 来排序 A
 *
 *  如果 S[i] == "I"，那么 A[i] < A[i+1]   当前小于  i + 1
 *  如果 S[i] == "D"，那么 A[i] > A[i+1]   当前大于 i + 1
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
  let start = 0;
  let end = S.length;
  let res = [];
  for (let i = 0; i <= S.length; i++) {
    if (S[i] === "I") {
      res.push(start);
      start++;
    } else {
      res.push(end);
      end--;
    }
  }
  return res;
};

console.log(diStringMatch("IDID")); // [0,4,1,3,2]
console.log(diStringMatch("III")); // [0,1,2,3]
console.log(diStringMatch("DDI")); // [3,2,0,1]
