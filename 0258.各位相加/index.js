"use strict";
/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。

示例:

输入: 38
输出: 2
解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
进阶:
你可以不使用循环或者递归，且在 O(1) 时间复杂度内解决这个问题吗？

点睛  num %  9
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) {
        return num;
    }
    return addDigits((num + '').split('').reduce((sum, cur) => sum + Number(cur), 0));
};
console.log(addDigits(38)); // 3 + 8 = 11  =>  1 + 1 = 2
console.log(addDigits(67)); // 6 + 7 = 13 => 1 + 3 = 4
console.log(addDigits(546)); // 5 + 4 + 6  = 15 => 1 + 5 = 6
console.log(addDigits(5464898)); // 5 + 4 + 6  +4 +8 +9 +8 =  44 => 4 + 4 = 8
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBUyxHQUFXO0lBQ2xDLElBQUksR0FBRyxHQUFHLEVBQUUsRUFBRTtRQUNaLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLFNBQVMsQ0FDZCxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDaEUsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7QUFDeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtBQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCO0FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyw0Q0FBNEMifQ==