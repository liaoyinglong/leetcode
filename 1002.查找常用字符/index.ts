/**
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。
示例 1：
输入：["bella","label","roller"]
输出：["e","l","l"]
示例 2：
输入：["cool","lock","cook"]
输出：["c","o"]
提示：
1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] 是小写字母
 */
interface PlanObj1002 {
  [key: string]: number;
}
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A: string[]): string[] {
  let obj: PlanObj1002 = {};

  [...A[0]].forEach(str => {
    obj[str] = obj[str] ? obj[str] + 1 : 1;
  });

  let res: string[] = [];

  Object.keys(obj).forEach(str => {
    let reg = new RegExp(str, 'g');
    let max = obj[str];

    for (let i = 0; i < A.length; i++) {
      const item = A[i];
      let num = (item.match(reg) || []).length;
      max = Math.min(num, max);
    }
    if (max) {
      res.push(...Array.from<string>({ length: max }).fill(str));
    }
  });
  return res;
};

console.log(commonChars(['bella', 'label', 'roller'])); // ["e","l","l"]
console.log(commonChars(['cool', 'lock', 'cook'])); // ["c","o"]
