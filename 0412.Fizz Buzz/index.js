"use strict";
/**
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
1. 如果 n 是3的倍数，输出“Fizz”；
2. 如果 n 是5的倍数，输出“Buzz”；
3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
示例：
n = 15,
返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    const res = [];
    for (let i = 1; i <= n; i++) {
        const isThree = !(i % 3);
        const isFive = !(i % 5);
        if (isThree && isFive) {
            res.push('FizzBuzz');
            continue;
        }
        if (isThree) {
            res.push('Fizz');
        }
        else if (isFive) {
            res.push('Buzz');
        }
        else {
            res.push(i + '');
        }
    }
    return res;
};
console.log(fizzBuzz(15));
// [
//   '1',
//   '2',
//   'Fizz',
//   '4',
//   'Buzz',
//   'Fizz',
//   '7',
//   '8',
//   'Fizz',
//   'Buzz',
//   '11',
//   'Fizz',
//   '13',
//   '14',
//   'FizzBuzz'
// ];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFFSDs7O0dBR0c7QUFDSCxJQUFJLFFBQVEsR0FBRyxVQUFTLENBQVM7SUFDL0IsTUFBTSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDM0IsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhCLElBQUksT0FBTyxJQUFJLE1BQU0sRUFBRTtZQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JCLFNBQVM7U0FDVjtRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQjthQUFNLElBQUksTUFBTSxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEI7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2xCO0tBQ0Y7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDMUIsSUFBSTtBQUNKLFNBQVM7QUFDVCxTQUFTO0FBQ1QsWUFBWTtBQUNaLFNBQVM7QUFDVCxZQUFZO0FBQ1osWUFBWTtBQUNaLFNBQVM7QUFDVCxTQUFTO0FBQ1QsWUFBWTtBQUNaLFlBQVk7QUFDWixVQUFVO0FBQ1YsWUFBWTtBQUNaLFVBQVU7QUFDVixVQUFVO0FBQ1YsZUFBZTtBQUNmLEtBQUsifQ==