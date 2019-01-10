/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || !strs.length) return '';
  const minLength = Math.min(...strs.map(item => item.length));
  const minLengthStr = strs.filter(item => item.length === minLength)[0];
  let prefixs = [];
  let arr = [...minLengthStr];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    const s = arr[i];
    if (strs.every(item => item[i] === s)) {
      prefixs.push(s);
      continue;
    }
    break;
  }
  return prefixs.join('');
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
console.log(longestCommonPrefix(['dog', 'carcar', 'car'])); // ''
console.log(longestCommonPrefix(['c', 'acc', 'ccc'])); // ''
console.log(longestCommonPrefix(['ca', 'a'])); // ''
console.log(longestCommonPrefix(['aca', 'cba'])); // ''
