"use strict";
/**
 * 给定一个带有头结点 head 的非空单链表，返回链表的中间结点。
 如果有两个中间结点，则返回第二个中间结点。
 示例 1：
 输入：[1,2,3,4,5]
 输出：此列表中的结点 3 (序列化形式：[3,4,5])
 返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
 注意，我们返回了一个 ListNode 类型的对象 ans，这样：
 ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
 示例 2：

 输入：[1,2,3,4,5,6]
 输出：此列表中的结点 4 (序列化形式：[4,5,6])
 由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
 提示：
 给定链表的结点数介于 1 和 100 之间。
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let cur = head;
    const arr = [cur];
    while ((cur = cur.next)) {
        arr.push(cur);
    }
    const half = arr.length / 2;
    return arr[Math.floor(half)];
};
const head0876 = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                    //   {
                    //   val: 6,
                    //   next: null
                    // }
                }
            }
        }
    }
};
console.log(middleNode(head0876));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFNSDs7O0dBR0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFTLElBQWtCO0lBQzFDLElBQUksR0FBRyxHQUF3QixJQUFJLENBQUM7SUFDcEMsTUFBTSxHQUFHLEdBQW1CLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDdkIsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNmO0lBQ0QsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFFNUIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFpQjtJQUM3QixHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFO1lBQ0osR0FBRyxFQUFFLENBQUM7WUFDTixJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLENBQUM7Z0JBQ04sSUFBSSxFQUFFO29CQUNKLEdBQUcsRUFBRSxDQUFDO29CQUNOLElBQUksRUFBRSxJQUFJO29CQUNWLE1BQU07b0JBQ04sWUFBWTtvQkFDWixlQUFlO29CQUNmLElBQUk7aUJBQ0w7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyJ9