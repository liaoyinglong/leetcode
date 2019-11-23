"use strict";
/**
 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。

 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。

 你可以返回任何满足上述条件的数组作为答案。

 示例：
 输入：[4,2,5,7]
 输出：[4,5,2,7]
 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 
 提示：
 2 <= A.length <= 20000
 A.length % 2 == 0
 0 <= A[i] <= 1000
 
 */
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
    let oddIndex = 1;
    let evenIndex = 0;
    let arr = [];
    A.forEach(item => {
        if (item % 2) {
            arr[oddIndex] = item;
            oddIndex += 2;
        }
        else {
            arr[evenIndex] = item;
            evenIndex += 2;
        }
    });
    return arr;
};
console.log(sortArrayByParityII([4, 2, 5, 7]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0g7OztHQUdHO0FBQ0gsSUFBSSxtQkFBbUIsR0FBRyxVQUFTLENBQVc7SUFDNUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLEdBQUcsR0FBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNmLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDckIsUUFBUSxJQUFJLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyJ9