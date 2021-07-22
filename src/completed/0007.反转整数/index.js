const max = 2 ** 31;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (!Number.isFinite(x)) return 0;
  var prefix = '';
  if (x < 0) {
    prefix = '-';
    x = Math.abs(x);
  }
  var res = parseInt(
    String(x)
      .split('')
      .reverse()
      .join('')
  );
  if (res >= max) return 0;
  return Number(`${prefix}${res}`);
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
console.log(reverse(-1534236469));
