"use strict";
/**
 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 n - 1 个元素增加 1。

 示例:

 输入:
 [1,2,3]

 输出:
 3

 解释:
 只需要3次移动（注意每次移动会增加两个元素的值）：

 [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */
// 鬼才 https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/comments/46965
/**
 * n-1个数同时加一，就好比每次有一个数自身减一，因为只能做减法，所以数组最后的数只能是最小值。这样的话每个元素减去最小值求其和就是答案。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let min = Math.min(...nums);
    let step = 0;
    for (let item of nums) {
        step += item - min;
    }
    return step;
};
// console.log(minMoves([1, 2, 3])); // 3
// console.log(minMoves([1, 1, 1])); // 0
// console.log(minMoves([1, 2])); // 1
console.log(minMoves([1, 1, 5])); // 4
console.log(minMoves([-100, 0, 100])); // 300
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUgsMkZBQTJGO0FBRTNGOztHQUVHO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBUyxJQUFjO0lBQ3BDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixLQUFLLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtRQUNyQixJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztLQUNwQjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBRUYseUNBQXlDO0FBQ3pDLHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7QUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSJ9