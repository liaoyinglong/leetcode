"use strict";
/**
 你将得到一个字符串数组 A。
 如果经过任意次数的移动，S == T，那么两个字符串 S 和 T 是特殊等价的。
 一次移动包括选择两个索引 i 和 j，且 i ％ 2 == j ％ 2，并且交换 S[j] 和 S [i]。
 现在规定，A 中的特殊等价字符串组是 A 的非空子集 S，这样不在 S 中的任何字符串与 S 中的任何字符串都不是特殊等价的。
 返回 A 中特殊等价字符串组的数量。
 示例 1：
 输入：["a","b","c","a","c","c"]
 输出：3
 解释：3 组 ["a","a"]，["b"]，["c","c","c"]
 
 示例 2：
 输入：["aa","bb","ab","ba"]
 输出：4
 解释：4 组 ["aa"]，["bb"]，["ab"]，["ba"]
 
 示例 3：
 输入：["abc","acb","bac","bca","cab","cba"]
 输出：3
 解释：3 组 ["abc","cba"]，["acb","bca"]，["bac","cab"]
 
 示例 4：
 输入：["abcd","cdab","adcb","cbad"]
 输出：1
 解释：1 组 ["abcd","cdab","adcb","cbad"]
 提示：
 1 <= A.length <= 1000
 1 <= A[i].length <= 20
 所有 A[i] 都具有相同的长度。
 所有 A[i] 都只由小写字母组成。
 */
/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
    const itemLen = A[0].length;
    if (itemLen < 2) {
        return new Set(A).size;
    }
    // let oddi = 0;
    // let oddj = 2;
    // let eveni = 0;
    // let evenj = 2;
    // let isChanged = false
    //
    // for (let i = 0; i < A.length; i++) {
    //   let cur = A[i];
    //   for (let j = i; j < A.length; j++) {
    //     let next = A[j];
    //     if()
    //
    //
    //   }
    // }
    return itemLen;
};
console.log(numSpecialEquivGroups(["abcd", "cdab", "cbad", "xyzz", "zzxy", "zzyx"])); // 3
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQThCRztBQUVIOzs7R0FHRztBQUNILElBQUkscUJBQXFCLEdBQUcsVUFBUyxDQUFXO0lBQzlDLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFNUIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ2YsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDeEI7SUFDRCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLEVBQUU7SUFDRix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLEVBQUU7SUFDRixFQUFFO0lBQ0YsTUFBTTtJQUNOLElBQUk7SUFFSixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUNULHFCQUFxQixDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUN4RSxDQUFDLENBQUMsSUFBSSJ9