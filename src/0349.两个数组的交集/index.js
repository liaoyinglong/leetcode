"use strict";
/**
 * 给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
说明:

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let loopArr;
    let compareArr;
    if (nums1.length < nums2.length) {
        loopArr = nums1;
        compareArr = nums2;
    }
    else {
        loopArr = nums2;
        compareArr = nums1;
    }
    return loopArr.reduce((arr, cur) => {
        if (compareArr.includes(cur) && !arr.includes(cur)) {
            arr.push(cur);
        }
        return arr;
    }, []);
};
console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQWVHO0FBSUg7Ozs7R0FJRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVMsS0FBWSxFQUFFLEtBQVk7SUFDcEQsSUFBSSxPQUFjLENBQUM7SUFDbkIsSUFBSSxVQUFpQixDQUFDO0lBQ3RCLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQy9CLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUNwQjtTQUFNO1FBQ0wsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixVQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3BCO0lBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3hDLElBQUksVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEQsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDVCxDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07QUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEifQ==