// https://leetcode.com/problems/reverse-linked-list/
// Reverse Linked List

// 1st
// pre = node
// cur = head
// while cur.next;
// return pre.next;

// 2nd
// pre = null
// while cur
// cur.next = pre;
// return pre

function reverseList(head: ListNode | null): ListNode | null {
  let pre = new ListNode();
  pre.next = head;
  let cur = head;
  while (cur && cur.next) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }

  return pre.next;
} // T:O(n) S:O(1)

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
} // T:O(n) S:O(1)
