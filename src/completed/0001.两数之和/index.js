// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let v = nums[i];
    if (map[target - v] >= 0) {
      return [map[target - v], i];
    }
    map[v] = i;
  }
}
console.log(twoSum([2, 7, 11, 15], 18));
console.log(twoSum([3, 3], 6));
