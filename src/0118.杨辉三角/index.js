"use strict";
/**
 *
在杨辉三角中，每个数是它左上方和右上方的数的和。
 输入: 5
输出:

 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            res.push([1]);
        }
        else {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HO0FBSUg7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBUyxPQUFlO0lBQ3JDLElBQUksR0FBRyxHQUFvQixFQUFFLENBQUM7SUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixJQUFJLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksVUFBVSxHQUFHLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNwRSxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakQsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLENBQUM7YUFDcEM7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7S0FDRjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUY7Ozs7Ozs7O0dBUUc7QUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=