"use strict";
/**
 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

 F(0) = 0,   F(1) = 1
 F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 给定 N，计算 F(N)。

 示例 1：
 输入：2
 输出：1
 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 
 示例 2：
 输入：3
 输出：2
 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 
 示例 3：
 输入：4
 输出：3
 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 提示：

 0 ≤ N ≤ 30
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (!N)
        return 0;
    let pre1 = 1;
    let pre2 = 1;
    let res = pre1;
    return Array.from({ length: N }, (v, i) => {
        if (i >= 2) {
            res = pre1 + pre2;
            [pre1, pre2] = [pre2, res];
        }
        return res;
    }).pop();
};
console.log(fib(5));
/**
1   2   3   4   5   6   7
1   1   2   3   5   8   13
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUNIOzs7R0FHRztBQUNILElBQUksR0FBRyxHQUFHLFVBQVMsQ0FBUztJQUMxQixJQUFJLENBQUMsQ0FBQztRQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2pCLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQztJQUNmLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNsQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDWCxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXBCOzs7R0FHRyJ9