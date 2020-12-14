import { isAnagram } from "./isAnagram";

describe("242. 有效的字母异位词", () => {
  test("merge.case 1 ", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
    expect(isAnagram("rat", "car")).toBe(false);
  });
});
