"use strict";
/**
 * 给定两个整数 L 和 R ，找到闭区间 [L, R] 范围内，计算置位位数为质数的整数个数。
（注意，计算置位代表二进制表示中1的个数。例如 21 的二进制表示 10101 有 3 个计算置位。还有，1 不是质数。）
示例 1:
输入: L = 6, R = 10
输出: 4
解释:
6 -> 110 (2 个计算置位，2 是质数)
7 -> 111 (3 个计算置位，3 是质数)
9 -> 1001 (2 个计算置位，2 是质数)
10-> 1010 (2 个计算置位，2 是质数)
示例 2:
输入: L = 10, R = 15
输出: 5
解释:
10 -> 1010 (2 个计算置位, 2 是质数)
11 -> 1011 (3 个计算置位, 3 是质数)
12 -> 1100 (2 个计算置位, 2 是质数)
13 -> 1101 (3 个计算置位, 3 是质数)
14 -> 1110 (3 个计算置位, 3 是质数)
15 -> 1111 (4 个计算置位, 4 不是质数)
注意:
L, R 是 L <= R 且在 [1, 10^6] 中的整数。
R - L 的最大值为 10000。
 */
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
    let res = 0;
    const primeArr = [2, 3, 5, 7, 11, 13, 17, 19];
    let maxPrime = 19;
    while (L <= R) {
        let len = L.toString(2).replace(/0/g, '').length;
        if (len > maxPrime) {
            let begin = 2;
            let curIsPrime = false;
            while (begin < len) {
                if (!(len % begin)) {
                    curIsPrime = false;
                }
            }
            if (curIsPrime) {
                primeArr.push(len);
                maxPrime = len;
                res++;
            }
        }
        else if (primeArr.includes(len)) {
            res++;
        }
        L++;
    }
    return res;
};
console.log(countPrimeSetBits(6, 10)); // 4
console.log(countPrimeSetBits(10, 15)); // 5
console.log(countPrimeSetBits(842, 888)); // 23
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVIOzs7O0dBSUc7QUFDSCxJQUFJLGlCQUFpQixHQUFHLFVBQVMsQ0FBUyxFQUFFLENBQVM7SUFDbkQsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBRVosTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBRWxCLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNiLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxHQUFHLEdBQUcsUUFBUSxFQUFFO1lBQ2xCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN2QixPQUFPLEtBQUssR0FBRyxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsRUFBRTtvQkFDbEIsVUFBVSxHQUFHLEtBQUssQ0FBQztpQkFDcEI7YUFDRjtZQUNELElBQUksVUFBVSxFQUFFO2dCQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25CLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ2YsR0FBRyxFQUFFLENBQUM7YUFDUDtTQUNGO2FBQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLEdBQUcsRUFBRSxDQUFDO1NBQ1A7UUFFRCxDQUFDLEVBQUUsQ0FBQztLQUNMO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtBQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyJ9