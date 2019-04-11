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

type T = number[];

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1: T, nums2: T): T {
  let loopArr: T;
  let compareArr: T;
  if (nums1.length < nums2.length) {
    loopArr = nums1;
    compareArr = nums2;
  } else {
    loopArr = nums2;
    compareArr = nums1;
  }

  return loopArr.reduce<T>((arr, cur) => {
    if (compareArr.includes(cur) && !arr.includes(cur)) {
      arr.push(cur);
    }
    return arr;
  }, []);
};

console.log(intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]
