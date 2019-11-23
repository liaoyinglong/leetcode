"use strict";
/**
 泰波那契序列 Tn 定义如下：

 T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

 给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

  

 示例 1：

 输入：n = 4
 输出：4
 解释：
 T_3 = 0 + 1 + 1 = 2
 T_4 = 1 + 1 + 2 = 4
 示例 2：

 输入：n = 25
 输出：1389537
  

 提示：

 0 <= n <= 37
 答案保证是一个 32 位整数，即 answer <= 2^31 - 1。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/n-th-tribonacci-number
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 
 */
/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
    const resMap = [0, 1, 1, 2, 4];
    if (resMap[n] !== void 0)
        return resMap[n];
    let i = resMap.length - 1;
    while (++i <= n) {
        resMap[i] = resMap[i - 3] + resMap[i - 2] + resMap[i - 1];
    }
    return resMap.pop();
};
console.log(tribonacci(0));
console.log(tribonacci(25));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0ErQkc7QUFFSDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsR0FBRyxVQUFTLENBQVM7SUFDbkMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDO1FBQUUsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDMUIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDZixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0Q7SUFFRCxPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUN0QixDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMifQ==