/**
 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

 示例 1:

 输入: s = "anagram", t = "nagaram"
 输出: true
 示例 2:

 输入: s = "rat", t = "car"
 输出: false
 说明:
 你可以假设字符串只包含小写字母。

 进阶:
 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/valid-anagram
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
export function isAnagram(s: string, t: string): boolean {
  const m = new Map<string, number>();
  const len = Math.max(s.length, t.length);
  for (let i = 0; i < len; i++) {
    const sItem = s[i];
    if (sItem) {
      const cachedS = m.get(sItem);
      const next = cachedS ? cachedS + 1 : 1;
      if (next === 0) {
        m.delete(sItem);
      } else {
        m.set(sItem, next);
      }
    }
    const tItem = t[i];
    if (tItem) {
      const cachedT = m.get(tItem);

      const next = cachedT ? cachedT - 1 : -1;
      if (next === 0) {
        m.delete(tItem);
      } else {
        m.set(tItem, next);
      }
    }
  }
  return m.size === 0;
}
