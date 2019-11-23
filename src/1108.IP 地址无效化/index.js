"use strict";
/**
 给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

 所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

  

 示例 1：

 输入：address = "1.1.1.1"
 输出："1[.]1[.]1[.]1"
 示例 2：

 输入：address = "255.100.50.0"
 输出："255[.]100[.]50[.]0"
  

 提示：

 给出的 address 是一个有效的 IPv4 地址

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/defanging-an-ip-address
 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};
console.log(defangIPaddr("1.1.1.1")); //1[.]1[.]1[.]1
console.log(defangIPaddr("255.100.50.0")); //255[.]100[.]50[.]0
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVIOzs7R0FHRztBQUNILE1BQU0sWUFBWSxHQUFHLFVBQVMsT0FBZTtJQUMzQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlO0FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IifQ==