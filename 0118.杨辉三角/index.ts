/**
 *
在杨辉三角中，每个数是它左上方和右上方的数的和。
 输入: 5
输出:

 */

type numberArr0118 = number[];

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows: number): numberArr0118[] {
  let res: numberArr0118[] = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      res.push([1]);
    } else {
      let arr = [];
      for (let j = 0; j <= i; j++) {
        let leftTopIndex = j - 1;
        let rightTopIndex = j;
        let leftTopNum = leftTopIndex === -1 ? 0 : res[i - 1][leftTopIndex];
        let rightTopNum = res[i - 1][rightTopIndex] || 0;
        arr.push(leftTopNum + rightTopNum);
      }
      res.push(arr);
    }
  }

  return res;
};

/**
[
[1],
[1,1],
[1,2,1],
[1,3,3,1],
[1,4,6,4,1]
]
 */
console.log(generate(5));
