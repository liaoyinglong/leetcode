/**
 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

 给出两个整数 x 和 y，计算它们之间的汉明距离。

 注意：
 0 ≤ x, y < 231.

 示例:

 输入: x = 1, y = 4

 输出: 2

 解释:
 1   (0 0 0 1)
 4   (0 1 0 0)
        ↑   ↑

 上面的箭头指出了对应二进制位不同的位置。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let x2 = x.toString(2);
  let y2 = y.toString(2);
  let i = 0;
  if (x2.length > y2.length) {
    i = x2.length;
    y2 = y2.padStart(i, "0");
  } else {
    i = y2.length;
    x2 = x2.padStart(i, "0");
  }

  let sum = 0;

  while (i--) {
    if (x2[i] !== y2[i]) sum++;
  }
  return sum;
};
console.log(hammingDistance(1, 4)); //  2
console.log(hammingDistance(4, 14)); //  2
