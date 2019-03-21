"use strict";
/**
 自除数 是指可以被它包含的每一位数除尽的数。

 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

 还有，自除数不允许包含 0 。

 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

 示例 1：

 输入：
 上边界left = 1, 下边界right = 22
 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 注意：

 每个输入参数的边界满足 1 <= left <= right <= 10000。
 */
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let res = [];
    let i = left;
    while (i <= right) {
        if (i < 10) {
            res.push(i);
            i++;
            continue;
        }
        let str = String(i).split("");
        if (str.includes("0")) {
            i++;
            continue;
        }
        if (str.every(item => !(i % +item))) {
            res.push(i);
        }
        i++;
    }
    return res;
};
console.log(selfDividingNumbers(1, 22));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBRUg7Ozs7R0FJRztBQUNILElBQUksbUJBQW1CLEdBQUcsVUFBUyxJQUFZLEVBQUUsS0FBYTtJQUM1RCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFFYixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDYixPQUFPLENBQUMsSUFBSSxLQUFLLEVBQUU7UUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ1YsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNaLENBQUMsRUFBRSxDQUFDO1lBQ0osU0FBUztTQUNWO1FBQ0QsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckIsQ0FBQyxFQUFFLENBQUM7WUFDSixTQUFTO1NBQ1Y7UUFFRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNuQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2I7UUFDRCxDQUFDLEVBQUUsQ0FBQztLQUNMO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDIn0=