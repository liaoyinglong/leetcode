"use strict";
/**
 我们称一个数 X 为好数, 如果它的每位数字逐个地被旋转 180 度后，我们仍可以得到一个有效的，且和 X 不同的数。要求每位数字都要被旋转。

 如果一个数的每位数字被旋转以后仍然还是一个数字， 则这个数是有效的。0, 1, 和 8 被旋转后仍然是它们自己；2 和 5 可以互相旋转成对方；6 和 9 同理，除了这些以外其他的数字旋转以后都不再是有效的数字。

 现在我们有一个正整数 N, 计算从 1 到 N 中有多少个数 X 是好数？

 示例:
 输入: 10
 输出: 4
 解释:
 在[1, 10]中有四个好数： 2, 5, 6, 9。
 注意 1 和 10 不是好数, 因为他们在旋转之后不变。
 注意:

 N 的取值范围是 [1, 10000]。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/rotated-digits
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// const rotatedDigitsMap = {
//   1: {
//     rotated: 1,
//     isGoodNumber: false
//   },
//   2: {
//     rotated: 5,
//     isGoodNumber: false
//   },
// };
const rotatedNumber = {
    0: 0,
    1: 1,
    8: 8,
    2: 5,
    5: 2,
    6: 9,
    9: 6
};
const goodNumber = {
    2: true,
    5: true,
    6: true,
    9: true
};
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function (N) {
    let res = 0;
    for (let i = 0; i <= N; i++) {
        if (i < 10) {
            if (goodNumber.hasOwnProperty(i)) {
                res++;
            }
        }
        else {
            let arr = i.toString().split("");
            let rotatedStr = "";
            let canRotated = true;
            for (let j = 0; j < arr.length; j++) {
                let item = arr[j];
                if (!rotatedNumber.hasOwnProperty(item)) {
                    canRotated = false;
                    break;
                }
                //@ts-ignore
                rotatedStr += rotatedNumber[item];
            }
            if (canRotated && rotatedStr !== i + "") {
                res++;
            }
        }
    }
    return res;
};
// console.log(rotatedDigits(10)); // 4
// console.log(rotatedDigits(12)); // 5
console.log(rotatedDigits(857)); // 247
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUgsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLE9BQU87QUFDUCxTQUFTO0FBQ1Qsa0JBQWtCO0FBQ2xCLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1AsS0FBSztBQUNMLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUVKLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0NBQ0wsQ0FBQztBQUVGLE1BQU0sVUFBVSxHQUFHO0lBQ2pCLENBQUMsRUFBRSxJQUFJO0lBQ1AsQ0FBQyxFQUFFLElBQUk7SUFDUCxDQUFDLEVBQUUsSUFBSTtJQUNQLENBQUMsRUFBRSxJQUFJO0NBQ1IsQ0FBQztBQUVGOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBUztJQUNwQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNWLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDaEMsR0FBRyxFQUFFLENBQUM7YUFDUDtTQUNGO2FBQU07WUFDTCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3ZDLFVBQVUsR0FBRyxLQUFLLENBQUM7b0JBQ25CLE1BQU07aUJBQ1A7Z0JBQ0QsWUFBWTtnQkFDWixVQUFVLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxVQUFVLElBQUksVUFBVSxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3ZDLEdBQUcsRUFBRSxDQUFDO2FBQ1A7U0FDRjtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFRix1Q0FBdUM7QUFDdkMsdUNBQXVDO0FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNIn0=