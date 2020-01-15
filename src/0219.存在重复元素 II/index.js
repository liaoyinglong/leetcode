"use strict";
/**
 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。

 示例 1:

 输入: nums = [1,2,3,1], k = 3
 输出: true
 示例 2:

 输入: nums = [1,0,1,1], k = 1
 输出: true
 示例 3:

 输入: nums = [1,2,3,1,2,3], k = 2
 输出: false

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/contains-duplicate-ii
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    let leftIndex = 0;
    let rightIndex = 1;
    while (rightIndex < nums.length) {
        if (nums[leftIndex] === nums[rightIndex]) {
            return true;
        }
        if (rightIndex + 1 - leftIndex <= k) {
            rightIndex++;
        }
        else {
            leftIndex++;
        }
    }
    return false;
};
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFFSDs7OztHQUlHO0FBQ0gsTUFBTSx1QkFBdUIsR0FBRyxVQUFTLElBQWMsRUFBRSxDQUFTO0lBQ2hFLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFbkIsT0FBTyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksVUFBVSxHQUFHLENBQUMsR0FBRyxTQUFTLElBQUksQ0FBQyxFQUFFO1lBQ25DLFVBQVUsRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNMLFNBQVMsRUFBRSxDQUFDO1NBQ2I7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztBQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSJ9