/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (!s) return true;
  if (s.length % 2) return false;
  const left = ['(', '[', '{'];
  const right = [')', ']', '}'];
  const all = ['()', '{}', '[]'];

  var sArr = s.split('');

  if (right.includes(sArr[0])) return false;

  var sLen = sArr.length;
  let prev = [sArr[0]];
  let current = '';
  for (let i = 1; i < sLen; i++) {
    current = sArr[i];
    if (left.includes(current)) {
      prev.push(current);
    } else {
      let temp = prev.pop();
      if (!all.includes(temp + current)) {
        return false;
      }
    }
  }
  return !prev.length;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('{[]}')); // true
console.log(isValid('')); // true
console.log(isValid('{[()]}')); // true

console.log('====');

console.log(isValid('(]')); // false
console.log(isValid('((')); // false
console.log(isValid('([)]')); // false
