"use strict";
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let cur1 = l1;
    let cur2 = l2;
    const setCur1Val = (val) => {
        if (cur1.val >= val) {
            // 往前插入
            [cur1.val, val] = [val, cur1.val];
            cur1.next = {
                val,
                next: cur1.next
            };
        }
        else if (cur1.next) {
            cur1 = cur1.next;
            setCur1Val(val);
        }
        else {
            cur1.next = {
                val,
                next: cur1.next
            };
        }
    };
    while (cur2) {
        setCur1Val(cur2.val);
        cur2 = cur2.next;
    }
    return l1;
};
let l10021 = {
    val: -2,
    next: {
        val: 5,
        next: null
    }
};
let l20021 = {
    val: -9,
    next: {
        val: -6,
        next: {
            val: -2,
            next: {
                val: -3,
                next: null
            }
        }
    }
};
console.log(JSON.stringify(mergeTwoLists(l10021, l20021), null, 4));
// var mergeTwoLists = function(l1, l2) {
//   if (l1 === null) {
//     return l2;
//   }
//   if (l2 === null) {
//     return l1;
//   }
//   if(l1.val<=l2.val) {
//     l1.next = mergeTwoLists(l1.next,l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1,l2.next);
//     return l2;
//   }
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBbUNBOzs7O0dBSUc7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUNsQixFQUEwQixFQUMxQixFQUEwQjtJQUUxQixJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDZixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBQ0QsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2YsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNkLElBQUksSUFBSSxHQUEyQixFQUFFLENBQUM7SUFFdEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRTtRQUNqQyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ25CLE9BQU87WUFDUCxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1YsR0FBRztnQkFDSCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7YUFDaEIsQ0FBQztTQUNIO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRztnQkFDVixHQUFHO2dCQUNILElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNoQixDQUFDO1NBQ0g7SUFDSCxDQUFDLENBQUM7SUFFRixPQUFPLElBQUksRUFBRTtRQUNYLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7S0FDbEI7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQztBQUVGLElBQUksTUFBTSxHQUFpQjtJQUN6QixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7UUFDTixJQUFJLEVBQUUsSUFBSTtLQUNYO0NBQ0YsQ0FBQztBQUVGLElBQUksTUFBTSxHQUFpQjtJQUN6QixHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ1AsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNQLElBQUksRUFBRTtZQUNKLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDUCxJQUFJLEVBQUUsSUFBSTthQUNYO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVwRSx5Q0FBeUM7QUFDekMsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQixNQUFNO0FBQ04sdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQixNQUFNO0FBQ04seUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLDJDQUEyQztBQUMzQyxpQkFBaUI7QUFDakIsTUFBTTtBQUNOLEtBQUsifQ==