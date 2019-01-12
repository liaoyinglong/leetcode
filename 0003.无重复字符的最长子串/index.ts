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
var lengthOfLongestSubstring = function(s: string) {
  const arr = s.split('');
  const { length } = arr;

  const nonRepeatingArr = [...new Set(arr)];
  if (nonRepeatingArr.length <= 2) return nonRepeatingArr.length;

  let size = 3;
  let position = size - 1;
  let i = 0;
  let maxLen = 3;
  let winArr = [];
  while (position < length) {
    winArr = arr.slice(i, size);
    const winArrLen = winArr.length;
    if (winArrLen === [...new Set(winArr)].length) {
      // 说明没有重复
      maxLen = winArrLen;
      position++;
    } else {
      i++;
      position++;
    }
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('pwkew'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('abcabcbbd'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('bbbbbbbb'));
