"use strict";
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
var shortestToChar = function (S, C) {
    let res = [];
    let curIndex = S.indexOf(C);
    let nextIndex = S.indexOf(C, curIndex + 1);
    let step = 0;
    while (step < S.length) {
        if (step <= curIndex) {
            res.push(curIndex - step);
            step++;
        }
        else {
            if (nextIndex !== -1 && step > curIndex + (nextIndex - curIndex) / 2) {
                curIndex = nextIndex;
                nextIndex = S.indexOf(C, curIndex + 1);
            }
            else {
                res.push(step - curIndex);
                step++;
            }
        }
    }
    return res;
};
console.log(shortestToChar('loveleetcode', 'e'));
console.log(shortestToChar('aaba', 'b'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVIOzs7OztHQUtHO0FBRUg7Ozs7R0FJRztBQUNILElBQUksY0FBYyxHQUFHLFVBQVMsQ0FBUyxFQUFFLENBQVM7SUFDaEQsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3ZCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzNDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUViLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDdEIsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksRUFBRSxDQUFDO1NBQ1I7YUFBTTtZQUNMLElBQUksU0FBUyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksR0FBRyxRQUFRLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNwRSxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUNyQixTQUFTLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO2lCQUFNO2dCQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLEVBQUUsQ0FBQzthQUNSO1NBQ0Y7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMifQ==