/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};

console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'baa')); // -1
console.log(strStr('aaaaa', '')); // 0
