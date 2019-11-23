"use strict";
/**
 小A 和 小B 在玩猜数字。小B 每次从 1, 2, 3 中随机选择一个，小A 每次也从 1, 2, 3 中选择一个猜。他们一共进行三次这个游戏，请返回 小A 猜对了几次？
 输入的guess数组为 小A 每次的猜测，answer数组为 小B 每次的选择。guess和answer的长度都等于3。

 示例 1：

 输入：guess = [1,2,3], answer = [1,2,3]
 输出：3
 解释：小A 每次都猜对了。
  

 示例 2：

 输入：guess = [2,2,3], answer = [3,2,1]
 输出：1
 解释：小A 只猜对了第二次。
  

 限制：

 guess的长度 = 3
 answer的长度 = 3
 guess的元素取值为 {1, 2, 3} 之一。
 answer的元素取值为 {1, 2, 3} 之一。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/guess-numbers
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/guess-numbers
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
const game = function (guess, answer) {
    let res = 0;
    guess.forEach((a, i) => {
        if (a === answer[i]) {
            res++;
        }
    });
    return res;
};
console.log(game([1, 2, 3], [1, 2, 3])); // 3
console.log(game([2, 2, 3], [3, 2, 1])); // 1
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NHO0FBRUg7Ozs7R0FJRztBQUNILE1BQU0sSUFBSSxHQUFHLFVBQVMsS0FBZSxFQUFFLE1BQWdCO0lBQ3JELElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNaLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckIsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25CLEdBQUcsRUFBRSxDQUFDO1NBQ1A7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO0FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSJ9