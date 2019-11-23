/**
 编写一个算法来判断一个数是不是“快乐数”。

 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到 1。如果可以变为 1，那么这个数就是快乐数。

 示例: 

 输入: 19
 输出: true
 解释:
 1**2 + 9**2 = 82
 8**2 + 2**2 = 68
 6**2 + 8**2 = 100
 1**2 + 0**2 + 0**2 = 1

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/happy-number
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 
 */

/**
 
 统一可以当做 各位相加，最后只剩下一位数的时候 判断是否等于1即可
 
 
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n: number): boolean {
  if (n < 10) {
    return n === 1 || n === 7;
  }
  let res = (n + "").split("").reduce((sum, num) => {
    // @ts-ignore
    return sum + num ** 2;
  }, 0);

  return isHappy(res);
};

console.log(isHappy(9));
// console.log(isHappy(20));
