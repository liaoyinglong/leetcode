/**
 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

  

 说明：

 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
  

 示例：

 输入：
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 输出：[1,2,2,3,5,6]
  

 提示：

 -10^9 <= nums1[i], nums2[i] <= 10^9
 nums1.length == m + n
 nums2.length == n

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/merge-sorted-array
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 
 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number) {
  let i = nums1.length - 1;
  while (true) {
    if (nums1[i] === 0) {
      nums1.pop();
      i--;
      continue;
    }
    break;
  }

  let item1: number | undefined;
  let item2: number | undefined;

  let insetIndex = 0;

  while (true) {
    if (typeof item2 === "undefined") {
      item2 = nums2.shift();
      if (typeof item2 === "undefined") {
        break;
      }
    }

    item1 = nums1[insetIndex];
    if (typeof item1 === "undefined") {
      nums1[insetIndex] = item2;
      insetIndex++;
      item2 = undefined;
      continue;
    }
    if (item2 >= item1) {
      insetIndex++;
    } else {
      inset(nums1, insetIndex, item2);
      item2 = undefined;
    }
  }

  let j = m + n - 1;
  while (true) {
    if (typeof nums1[j] === "undefined") {
      nums1[j] = 0;
      j--;
      continue;
    }
    break;
  }
}
function inset(arr: number[], index: number, item: number) {
  arr.splice(index, 0, item);
}
