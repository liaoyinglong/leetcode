/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var arr = [...new Set(nums)];
  nums.length = 0;
  arr.forEach(item => nums.push(item));
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5
