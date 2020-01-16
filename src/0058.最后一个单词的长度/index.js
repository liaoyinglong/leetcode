"use strict";
/**
 给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。
 如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。
 如果不存在最后一个单词，请返回 0 。
 说明：一个单词是指仅由字母组成、不包含任何空格的 最大子字符串。
 示例:
 输入: "Hello World"
 输出: 5
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/length-of-last-word
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    s = s.trim();
    let i = s.length;
    let res = 0;
    while (--i >= 0) {
        if (s[i] === "") {
            return 0;
        }
        if (s[i] === " ") {
            return res;
        }
        res++;
    }
    return res;
};
console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("World")); // 5
console.log(lengthOfLastWord(" ")); // 0
// 阴险  测试用例 "a " a后面有个空格的
console.log(lengthOfLastWord("a ")); // 1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7O0dBV0c7QUFDSDs7O0dBR0c7QUFDSCxNQUFNLGdCQUFnQixHQUFHLFVBQVMsQ0FBUztJQUN6QyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxDQUFDO1NBQ1Y7UUFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDaEIsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUNELEdBQUcsRUFBRSxDQUFDO0tBQ1A7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQ3hDLHlCQUF5QjtBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJIn0=