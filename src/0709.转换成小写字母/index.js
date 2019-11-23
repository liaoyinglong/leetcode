/**
 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。
*/

/**
 * 思路：
 *  做个映射表 将大写字母全部映射成小写
 */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  const map = {
    Q: "q",
    W: "w",
    E: "e",
    R: "r",
    T: "t",
    Y: "y",
    U: "u",
    I: "i",
    O: "o",
    P: "p",
    A: "a",
    S: "s",
    D: "d",
    F: "f",
    G: "g",
    H: "h",
    J: "j",
    K: "k",
    L: "l",
    Z: "z",
    X: "x",
    C: "c",
    V: "v",
    B: "b",
    N: "n",
    M: "m"
  };
  let { length } = str;
  let res = "";
  for (let i = 0; i < length; i++) {
    res += map[str[i]] || str[i];
  }
  return res;
};
console.log(toLowerCase("Hello")); // hello
console.log(toLowerCase("here")); // here
console.log(toLowerCase("LOVELY")); // lovely
