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
var fizzBuzz = function(n: number): string[] {
  const res: string[] = [];
  for (let i = 1; i <= n; i++) {
    const isThree = !(i % 3);
    const isFive = !(i % 5);

    if (isThree && isFive) {
      res.push('FizzBuzz');
      continue;
    }

    if (isThree) {
      res.push('Fizz');
    } else if (isFive) {
      res.push('Buzz');
    } else {
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
