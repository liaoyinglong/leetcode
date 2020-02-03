"use strict";
/**
 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 说明:
 返回的下标值（index1 和 index2）不是从零开始的。
 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 示例:

 输入: numbers = [2, 7, 11, 15], target = 9
 输出: [1,2]
 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    const m = new Map();
    for (let i = 0; i < numbers.length; i++) {
        let index1 = m.get(numbers[i]);
        if (index1 !== undefined && i > index1) {
            return [index1 + 1, i + 1];
        }
        m.set(target - numbers[i], i);
    }
};
//  解法2
//  双指针法，设置头尾两个指针，若头尾之和大于target，尾指针前移；若头尾之和小于target，头指针后移；若头尾之和等于target，返回头尾下标。
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function (numbers, target) {
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;
    while (leftIndex < rightIndex) {
        const sum = numbers[leftIndex] + numbers[rightIndex];
        if (sum > target) {
            rightIndex--;
        }
        else if (sum < target) {
            leftIndex++;
        }
        else {
            return [leftIndex + 1, rightIndex + 1];
        }
    }
};
console.log(twoSum2([2, 7, 11, 15], 9));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBRUg7Ozs7R0FJRztBQUNILE1BQU0sTUFBTSxHQUFHLFVBQVMsT0FBaUIsRUFBRSxNQUFjO0lBQ3ZELE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBRXBDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0IsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUU7WUFDdEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxDQUFDO0FBQ0YsT0FBTztBQUNQLCtFQUErRTtBQUMvRTs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLEdBQUcsVUFBUyxPQUFpQixFQUFFLE1BQWM7SUFDeEQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRXBDLE9BQU8sU0FBUyxHQUFHLFVBQVUsRUFBRTtRQUM3QixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJELElBQUksR0FBRyxHQUFHLE1BQU0sRUFBRTtZQUNoQixVQUFVLEVBQUUsQ0FBQztTQUNkO2FBQU0sSUFBSSxHQUFHLEdBQUcsTUFBTSxFQUFFO1lBQ3ZCLFNBQVMsRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=