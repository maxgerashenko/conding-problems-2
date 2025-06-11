// https://leetcode.com/problems/linked-list-cycle/
// Reverse Linked List

// use pre
// more cur
// while cur.next
// return pre.next
// T:O(n) S:O(1)
function reverseList(head: ListNode | null): ListNode | null {
  let pre = new ListNode();
  let cur = head;
  pre.next = cur;
  while (cur && cur.next) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }

  return pre.next;
}

// use pre.next
// use stack of pre
// while pre
// return pre.next
// T:O(n) S:O(1)

function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  while (cur) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  return pre;
}
