"use strict";
/**
 * 在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。
给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。
重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。
如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
示例 1:
输入:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
输出:
[[1,2,3,4]]
解释:
行遍历nums的结果是 [1,2,3,4]。新的矩阵是 1 * 4 矩阵, 用之前的元素值一行一行填充新矩阵。
示例 2:
输入:
nums =
[[1,2],
 [3,4]]
r = 2, c = 4
输出:
[[1,2],
 [3,4]]
解释:
没有办法将 2 * 2 矩阵转化为 2 * 4 矩阵。 所以输出原矩阵。
 */
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    if (!nums.length)
        return nums;
    const max = r * c;
    const total = nums.length * nums[0].length;
    if (max != total)
        return nums;
    const res = [];
    let curC = 0;
    const matrixReshapeHelper = (item) => {
        if (res[curC]) {
            if (res[curC].length >= c) {
                curC++;
                matrixReshapeHelper(item);
                return;
            }
            res[curC].push(+item);
        }
        else {
            res[curC] = [+item];
        }
    };
    nums
        .toString()
        .split(',')
        .forEach(matrixReshapeHelper);
    return res;
};
console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)); // [[1,2,3,4]]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)); // [[1,2],[3,4]]
console.log(matrixReshape([[1, 2], [3, 4]], 4, 1)); // [[1],[2],[3],[4]]
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJHO0FBRUg7Ozs7O0dBS0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFTLElBQWdCLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDOUIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDM0MsSUFBSSxHQUFHLElBQUksS0FBSztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQzlCLE1BQU0sR0FBRyxHQUFlLEVBQUUsQ0FBQztJQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFFYixNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBWSxFQUFFLEVBQUU7UUFDM0MsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUN6QixJQUFJLEVBQUUsQ0FBQztnQkFDUCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUIsT0FBTzthQUNSO1lBQ0QsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQyxDQUFDO0lBRUYsSUFBSTtTQUNELFFBQVEsRUFBRTtTQUNWLEtBQUssQ0FBQyxHQUFHLENBQUM7U0FDVixPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoQyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWM7QUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO0FBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQiJ9