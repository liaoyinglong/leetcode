/**
 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。

 J 中的字母不重复，J 和 S中的所有字符都是字母。字母区分大小写，因此"a"和"A"是不同类型的石头。

 注意:
 S 和 J 最多含有50个字母。
 J 中的字符不重复。
 */

/**
 * 思路：
 * 题目本质其实就是两个数组比较，得出 j 数组里面的值 出现在 s 数组里面的次数
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const baoShiMap = new Map();
  J.split("").forEach(key => baoShiMap.set(key, 0));
  S.split("").forEach(key => {
    if (baoShiMap.has(key)) {
      baoShiMap.set(key, baoShiMap.get(key) + 1);
    }
  });
  let sum = 0;
  for (let [, val] of baoShiMap) {
    sum += val;
  }

  return sum;
};

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0
