"use strict";
/**
 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

 在 S 上反复执行重复项删除操作，直到无法继续删除。

 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。



 示例：

 输入："abbaca"
 输出："ca"
 解释：
 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let i = 0;
    while (i <= s.length - 2) {
        if (s[i] === s[i + 1]) {
            s = s.slice(0, i) + s.slice(i + 2);
            i = Math.min(0, i - 1);
        }
        else {
            i++;
        }
    }
    return s;
};
// console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("aaaaaaaa"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxVQUFTLENBQVM7SUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QjthQUFNO1lBQ0wsQ0FBQyxFQUFFLENBQUM7U0FDTDtLQUNGO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRiwyQ0FBMkM7QUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDIn0=