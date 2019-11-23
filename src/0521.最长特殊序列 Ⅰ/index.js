"use strict";
/**
 * 给定两个字符串，你需要从这两个字符串中找出最长的特殊序列。最长特殊序列定义如下：
 * 该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。

子序列可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。

输入为两个字符串，输出最长特殊序列的长度。如果不存在，则返回 -1。

示例 :

输入: "aba", "cdc"
输出: 3
解析: 最长特殊序列可为 "aba" (或 "cdc")
 */
//  两个字符串不相同,就是特殊,返回长的；相同就没有，返回-1；
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
    if (a === b)
        return -1;
    return Math.max(a.length, b.length);
};
console.log(findLUSlength('aba', 'cdc')); // 3
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7R0FhRztBQUVILGtDQUFrQztBQUVsQzs7OztHQUlHO0FBQ0gsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFTLEVBQUUsQ0FBUztJQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN2QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJIn0=