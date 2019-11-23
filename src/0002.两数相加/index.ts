class ListNode<T = number> {
  next: null | ListNode<T> = null;
  constructor(public val: T) {}
}

function getListNode<T = number>(...args: T[]) {
  let currnetNode: ListNode<T>;
  let head: null | ListNode<T> = null;
  args.forEach(item => {
    if (currnetNode) {
      currnetNode.next = new ListNode(item);
      currnetNode = currnetNode.next;
    } else {
      currnetNode = new ListNode(item);
      head = currnetNode;
    }
  });
  return head;
}

/**
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
*/

var addTwoNumbers = function(l1: ListNode, l2: ListNode) {
  let currnetNodel1 = l1;
  let currnetNodel2 = l2;
  let step = 0;
  let sumNode: ListNode | null = null;
  let head: ListNode | null = null;
  while (currnetNodel1 || currnetNodel2) {
    const val1 = currnetNodel1 ? currnetNodel1.val : 0;
    const val2 = currnetNodel2 ? currnetNodel2.val : 0;

    const sum = val1 + val2 + step;
    step = Math.floor(sum / 10);
    if (sumNode) {
      sumNode.next = new ListNode(sum % 10);
      sumNode = sumNode.next;
    } else {
      sumNode = new ListNode(sum % 10);
      head = sumNode;
    }
    if (currnetNodel1) {
      currnetNodel1 = currnetNodel1.next!;
    }
    if (currnetNodel2) {
      currnetNodel2 = currnetNodel2.next!;
    }
  }
  if (step) {
    sumNode!.next = new ListNode(step);
  }
  return head;
};

// const l1 = getListNode(
//   ...[
//     1,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     0,
//     1
//   ]
// );
// const l2 = getListNode(...[5, 6, 4]);

// const l1 = getListNode(...[2, 4, 3]);
// const l2 = getListNode(...[5, 6, 4]);
// const l1 = getListNode(...[5]);
// const l2 = getListNode(...[5]);

const l1 = getListNode(...[1, 8]);
const l2 = getListNode(...[0]);
console.log(addTwoNumbers(l1!, l2!));
