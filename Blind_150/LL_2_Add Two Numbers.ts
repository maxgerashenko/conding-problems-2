// https://leetcode.com/problems/add-two-numbers/
// Add Two Numbers

// LL
// Revesed numbers helps
// get sum first
// left part is %10
// right part is > 9 ? 1 : 0
// make while depends on carry, l1, l2
// make val1 and val2 0 to cover conner case
// T:O(N) S:O(1)

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let pre = new ListNode();
  let cur = pre;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    cur.next = new ListNode();
    cur = cur.next;

    let val1 = l1?.val || 0;
    let val2 = l2?.val || 0;

    let sum = val1 + val2 + carry;
    let val = sum % 10;
    carry = sum > 9 ? 1 : 0;

    cur.val = val;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return pre.next;
} // T:O(1) S:O(1)
