/**
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
     [ 3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0 ]
说明:

字符串 S 的长度范围为 [1, 10000]。
C 是一个单字符，且保证是字符串 S 里的字符。
S 和 C 中的所有字母均为小写字母。
 */

/**
 * 1. 找出 C 出现的每个位置 放入 indexArr 内
 * 2. 遍历 indexArr 计算最小值
 *
 * ps: 以上两步可一起计算
 */

/**
 * @param {string} S
 * @param {string} C
 * @return {number[]}
 */
var shortestToChar = function(S: string, C: string): number[] {
  let res: number[] = [];
  let curIndex = S.indexOf(C);
  let nextIndex = S.indexOf(C, curIndex + 1);
  let step = 0;

  while (step < S.length) {
    if (step <= curIndex) {
      res.push(curIndex - step);
      step++;
    } else {
      if (nextIndex !== -1 && step > curIndex + (nextIndex - curIndex) / 2) {
        curIndex = nextIndex;
        nextIndex = S.indexOf(C, curIndex + 1);
      } else {
        res.push(step - curIndex);
        step++;
      }
    }
  }

  return res;
};
console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaba', 'b'));
