"use strict";
/**
 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
 注意:
 给定的整数保证在32位带符号整数的范围内。
 你可以假定二进制数不包含前导零位。
 示例 1:
 输入: 5
 输出: 2
 解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
 
 示例 2:
 输入: 1
 输出: 0
 解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
 */
/**
 * @param {number} num
 * @return {number}
 */
// var findComplement = function(num: number) {
//   return parseInt(
//     [...num.toString(2)].map(item => (+item ? 0 : 1)).join(""),
//     2
//   );
// };
let findComplement = function (num) {
    let mask = ~0;
    while (num & mask) {
        mask <<= 1;
    }
    return ~mask ^ num;
};
console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSDs7O0dBR0c7QUFDSCwrQ0FBK0M7QUFDL0MscUJBQXFCO0FBQ3JCLGtFQUFrRTtBQUNsRSxRQUFRO0FBQ1IsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLGNBQWMsR0FBRyxVQUFTLEdBQVc7SUFDdkMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDZCxPQUFPLEdBQUcsR0FBRyxJQUFJLEVBQUU7UUFDakIsSUFBSSxLQUFLLENBQUMsQ0FBQztLQUNaO0lBQ0QsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUkifQ==