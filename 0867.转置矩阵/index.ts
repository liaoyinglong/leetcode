/**
 * 给定一个矩阵 A， 返回 A 的转置矩阵。
矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

示例 1：
输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]

示例 2：
输入：[[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
提示：
1 <= A.length <= 1000
1 <= A[0].length <= 1000
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A: number[][]): number[][] {
  let res: number[][] = [];

  for (let x = 0; x < A.length; x++) {
    for (let y = 0; y < A[x].length; y++) {
      if (!res[y]) {
        res[y] = [];
      }
      res[y][x] = A[x][y];
    }
  }
  return res;
  // return A[0].map((v,i) =>A.map((a,j) =>a[i]))
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[1,4,7],[2,5,8],[3,6,9]]
console.log(transpose([[1, 2, 3], [4, 5, 6]])); // [[1,4],[2,5],[3,6]]
