// You are given two non-empty linked lists representing two non-negative
// integers. The digits are stored in reverse order and each of their nodes
// contain a single digit. Add the two numbers and return it as a linked list.
// --- Example
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let newList, p1, carry, sum;

  while (l1 || l2) {
    if (carry) {
      sum = 1;
      carry = false;
    } else {
      sum = 0;
    }
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      sum = sum % 10;
      carry = true;
    }
    if (!newList) {
      newList = new ListNode(sum)
      p1 = newList;
    } else {
      p1.next = new ListNode(sum)
      p1 = p1.next;
    }
  }
  if (carry) {
    p1.next = new ListNode(1);
  }
  return newList;
}

module.exports = addTwoNumbers;
