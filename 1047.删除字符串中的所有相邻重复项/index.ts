/**
 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

 在 S 上反复执行重复项删除操作，直到无法继续删除。

 在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。



 示例：

 输入："abbaca"
 输出："ca"
 解释：
 例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s: string): string {
  let i = 0;
  while (i <= s.length - 2) {
    if (s[i] === s[i + 1]) {
      s = s.slice(0, i) + s.slice(i + 2);
      i = Math.min(0, i - 1);
    } else {
      i++;
    }
  }

  return s;
};

// console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("aaaaaaaa"));
