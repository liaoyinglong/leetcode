/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = nums.length - 1;
  while (index >= 0) {
    if (nums[index] === val) {
      nums.splice(index, 1);
    }
    index--;
  }
  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
