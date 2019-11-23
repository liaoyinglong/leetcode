"use strict";
/**
 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。

 示例 1:

 输入: a = 1, b = 2
 输出: 3
 示例 2:

 输入: a = -2, b = 3
 输出: 1
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    if (a == 0)
        return b;
    if (b == 0)
        return a;
    return getSum(a ^ b, (a & b) << 1);
};
// console.log(getSum(1, 2)); // 3
// console.log(getSum(-2, 3)); // 1
// console.log(getSum(155, -154)); // 1
console.log(getSum(2, 3)); // 5
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0dBV0c7QUFDSDs7OztHQUlHO0FBQ0gsSUFBSSxNQUFNLEdBQUcsVUFBUyxDQUFTLEVBQUUsQ0FBUztJQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRUYsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyx1Q0FBdUM7QUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJIn0=