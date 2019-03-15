/**
 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
 
 提示：
 1 <= A.length <= 10000
 -10000 <= A[i] <= 10000
 A 已按非递减顺序排序。
 */

/**
 * 思路 map => n*n => sort 一下
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(v => v * v).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); //[4,9,9,49,121]
