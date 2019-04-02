"use strict";
/**
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s
        .split('')
        .reverse()
        .join('')
        .split(' ')
        .reverse()
        .join(' ');
};
console.log(reverseWords("Let's take LeetCode contest"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7OztHQVNHO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBUyxDQUFTO0lBQ25DLE9BQU8sQ0FBQztTQUNMLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDVCxPQUFPLEVBQUU7U0FDVCxJQUFJLENBQUMsRUFBRSxDQUFDO1NBQ1IsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNWLE9BQU8sRUFBRTtTQUNULElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyJ9