"use strict";
/**
 * {p,w,w,k,e,w}
 * {[p,w,w],k,e,w} =>  是否有重复 true
 * {p,[w,w,k],e,w} =>  是否有重复 true
 * {p,w,[w,k,e],w} =>  是否有重复 false  增加 窗口大小 判断窗口游标是否比数组length还大  是 返回上次结果
 * {p,w,[w,k,e,w]} =>  是否有重复 true  增加 窗口大小  判断窗口游标是否比数组length还大  是 返回上次结果
 */
/**
 * {d,v,d,f}
 * {[d,v,d],f}  => 是否有重复 true
 * {d,[v,d,f]}  => 是否有重复 false 增加 窗口大小  判断窗口游标是否比数组length还大  是 返回上次结果
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const { length } = s;
  if (length === 0) return 0;
  if (length === 1) return 1;

  let youBiaoNumber = 0;
  let toBiJiaoStr = "";
  let i = 1;
  let max = 0;

  while (i <= length) {
    toBiJiaoStr = s.substring(youBiaoNumber, i);
    if (toBiJiaoStr.length === [...new Set(toBiJiaoStr.split(""))].length) {
      i++;
      if (toBiJiaoStr.length > max) {
        max = toBiJiaoStr.length;
      }
    } else {
      youBiaoNumber++;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("bbbbbbbb")); // 1
console.log(lengthOfLongestSubstring("")); // 0
console.log(lengthOfLongestSubstring("au")); // 2
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
