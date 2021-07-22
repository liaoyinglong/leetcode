/**
 * 给定一个Excel表格中的列名称，返回其相应的列序号。
例如，
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
示例 1:
输入: "A"
输出: 1

示例 2:
输入: "AB"
输出: 28

示例 3:
输入: "ZY"
输出: 701
 */
const map = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 10,
  K: 11,
  L: 12,
  M: 13,
  N: 14,
  O: 15,
  P: 16,
  Q: 17,
  R: 18,
  S: 19,
  T: 20,
  U: 21,
  V: 22,
  W: 23,
  X: 24,
  Y: 25,
  Z: 26
};
type K = keyof typeof map;
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s: string): number {
  let y = s.length - 1;
  let res = 0;
  for (const item of s) {
    res += map[item as K] * Math.pow(26, y);
    y--;
  }
  return res;
};

console.log(titleToNumber('ZY')); // 701
console.log(titleToNumber('AAA')); // 703
console.log(titleToNumber('AJHX')); // 24568
