"use strict";
/**
 在一个「平衡字符串」中，'L' 和 'R' 字符的数量是相同的。

 给出一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。

 返回可以通过分割得到的平衡字符串的最大数量。

  

 示例 1：

 输入：s = "RLRRLLRLRL"
 输出：4
 解释：s 可以分割为 "RL", "RRLL", "RL", "RL", 每个子字符串中都包含相同数量的 'L' 和 'R'。
 示例 2：

 输入：s = "RLLLLRRRLR"
 输出：3
 解释：s 可以分割为 "RL", "LLLRRR", "LR", 每个子字符串中都包含相同数量的 'L' 和 'R'。
 示例 3：

 输入：s = "LLLLRRRR"
 输出：1
 解释：s 只能保持原样 "LLLLRRRR".
  

 提示：

 1 <= s.length <= 1000
 s[i] = 'L' 或 'R'

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/split-a-string-in-balanced-strings
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
    let n = 0;
    const len = s.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        if (s[i] === "L") {
            n--;
        }
        else {
            n++;
        }
        if (n === 0) {
            res++;
        }
    }
    return res;
};
console.log(balancedStringSplit("RLRRLLRLRL")); // 4
console.log(balancedStringSplit("RLLLLRRRLR")); // 3
console.log(balancedStringSplit("LLLLRRRR")); // 1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQ0c7QUFFSDs7O0dBR0c7QUFDSCxNQUFNLG1CQUFtQixHQUFHLFVBQVMsQ0FBUztJQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3JCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2hCLENBQUMsRUFBRSxDQUFDO1NBQ0w7YUFBTTtZQUNMLENBQUMsRUFBRSxDQUFDO1NBQ0w7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxHQUFHLEVBQUUsQ0FBQztTQUNQO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJIn0=