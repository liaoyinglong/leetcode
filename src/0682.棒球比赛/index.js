"use strict";
/**
 * 你现在是棒球比赛记录员。
给定一个字符串列表，每个字符串可以是以下四种类型之一：
1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
你需要返回你在所有回合中得分的总和。

示例 1:

输入: ["5","2","C","D","+"]
输出: 30
解释:
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到2分。总和是：7。
操作1：第2轮的数据无效。总和是：5。
第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
第4轮：你可以得到5 + 10 = 15分。总数是：30。
示例 2:

输入: ["5","-2","4","C","D","9","+","+"]
输出: 27
解释:
第1轮：你可以得到5分。总和是：5。
第2轮：你可以得到-2分。总数是：3。
第3轮：你可以得到4分。总和是：7。
操作1：第3轮的数据无效。总数是：3。
第4轮：你可以得到-4分（第三轮的数据已被删除）。总和是：-1。
第5轮：你可以得到9分。总数是：8。
第6轮：你可以得到-4 + 9 = 5分。总数是13。
第7轮：你可以得到9 + 5 = 14分。总数是27。
注意：

输入列表的大小将介于1和1000之间。
列表中的每个整数都将介于-30000和30000之间。
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let arr = [];
    return ops.reduce((sum, cur, index) => {
        let val = Number(cur);
        if (cur === 'D') {
            val = arr[Math.max(arr.length - 1, 0)] * 2;
            arr.push(val);
            sum += val;
        }
        else if (cur === '+') {
            val = arr[Math.max(arr.length - 1, 0)] + arr[Math.max(arr.length - 2, 0)];
            arr.push(val);
            sum += val;
        }
        else if (cur === 'C') {
            sum -= arr[arr.length - 1];
            arr.pop();
        }
        else {
            sum += val;
            arr.push(val);
        }
        return sum;
    }, 0);
};
// console.log(calPoints(['4', 'D', 'D', 'C', 'D'])); // 28
console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
// console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
// console.log(
//   calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+', '5', '4', 'C'])
// ); // 32
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0NHO0FBRUg7OztHQUdHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBUyxHQUFhO0lBQ3BDLElBQUksR0FBRyxHQUFhLEVBQUUsQ0FBQztJQUV2QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzVDLElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDZixHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNkLEdBQUcsSUFBSSxHQUFHLENBQUM7U0FDWjthQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxHQUFHLElBQUksR0FBRyxDQUFDO1NBQ1o7YUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7WUFDdEIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzNCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNYO2FBQU07WUFDTCxHQUFHLElBQUksR0FBRyxDQUFDO1lBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDUixDQUFDLENBQUM7QUFFRiwyREFBMkQ7QUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUN4RCwyRUFBMkU7QUFDM0UsZUFBZTtBQUNmLHdFQUF3RTtBQUN4RSxXQUFXIn0=