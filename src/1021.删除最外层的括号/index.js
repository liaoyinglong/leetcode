"use strict";
/**
 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
 如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
 给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
 对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

 示例 1：

 输入："(()())(())"
 输出："()()()"
 解释：
 输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
 删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
 示例 2：

 输入："(()())(())(()(()))"
 输出："()()()()(())"
 解释：
 输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
 删除每隔部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
 示例 3：

 输入："()()"
 输出：""
 解释：
 输入字符串为 "()()"，原语化分解得到 "()" + "()"，
 删除每个部分中的最外层括号后得到 "" + "" = ""。
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let leftCount = 0;
    let rightCount = 0;
    const arr = [];
    let curActiveIndex = 0;
    let res = "";
    for (let i = 0; i < S.length; i++) {
        let item = S[i];
        if (S[i] === "(") {
            leftCount++;
            rightCount = Math.max(0, rightCount - 1);
        }
        else {
            rightCount++;
            leftCount = Math.max(0, leftCount - 1);
        }
        if (arr[curActiveIndex]) {
            arr[curActiveIndex].push(item);
        }
        else {
            arr[curActiveIndex] = [item];
        }
        if (leftCount === 0) {
            arr[curActiveIndex].pop();
            arr[curActiveIndex].shift();
            res += arr[curActiveIndex].join("");
            curActiveIndex++;
        }
    }
    return res;
};
console.log(removeOuterParentheses("(()())(())")); // ()()()
console.log(removeOuterParentheses("(()())(())(()(()))")); // ()()()()(())
console.log(removeOuterParentheses("()()")); // ''
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCRztBQUNIOzs7R0FHRztBQUNILElBQUksc0JBQXNCLEdBQUcsVUFBUyxDQUFTO0lBQzdDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFbkIsTUFBTSxHQUFHLEdBQWUsRUFBRSxDQUFDO0lBQzNCLElBQUksY0FBYyxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsVUFBVSxFQUFFLENBQUM7WUFDYixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDdkIsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzFCLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixHQUFHLElBQUksR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVwQyxjQUFjLEVBQUUsQ0FBQztTQUNsQjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZTtBQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLIn0=