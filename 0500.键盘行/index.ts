/**
 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words: string[]): string[] {
  const keyboardArr = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"]
  ];
  const res: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    let index = keyboardArr.findIndex(arr => arr.includes(word[0]));
    const keyboard = keyboardArr[index];
    let inRow = true;
    for (let j = 0; j < word.length; j++) {
      if (!keyboard.includes(word[j])) {
        inRow = false;
        break;
      }
    }
    if (inRow) {
      res.push(words[i]);
    }
  }
  return res;
};

/**
 输入: ["Hello", "Alaska", "Dad", "Peace"]
 输出: ["Alaska", "Dad"]
 */

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"])); // ["Alaska", "Dad"]
