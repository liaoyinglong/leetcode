"use strict";
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
    var _a;
    let cur = head;
    while (cur) {
        if (cur.val === ((_a = cur.next) === null || _a === void 0 ? void 0 : _a.val)) {
            cur.next = cur.next.next;
        }
        else {
            cur = cur.next;
        }
    }
    return head;
};
const listNode0083 = {
    val: 1,
    next: { val: 1, next: { val: 1 } }
};
const listNode0083_1 = {
    val: 1,
    next: { val: 1, next: { val: 2 } }
};
console.log(deleteDuplicates(listNode0083));
console.log(deleteDuplicates(listNode0083_1));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBMkJBOzs7R0FHRztBQUNILE1BQU0sZ0JBQWdCLEdBQUcsVUFBUyxJQUFrQjs7SUFDbEQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2YsT0FBTyxHQUFHLEVBQUU7UUFDVixJQUFJLEdBQUcsQ0FBQyxHQUFHLFlBQUssR0FBRyxDQUFDLElBQUksMENBQUUsR0FBRyxDQUFBLEVBQUU7WUFDN0IsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMxQjthQUFNO1lBQ0wsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFLLENBQUM7U0FDakI7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxZQUFZLEdBQWlCO0lBQ2pDLEdBQUcsRUFBRSxDQUFDO0lBQ04sSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Q0FDbkMsQ0FBQztBQUNGLE1BQU0sY0FBYyxHQUFpQjtJQUNuQyxHQUFHLEVBQUUsQ0FBQztJQUNOLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0NBQ25DLENBQUM7QUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDIn0=