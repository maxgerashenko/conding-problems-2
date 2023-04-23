// https://leetcode.com/problems/reverse-linked-list/

// use tmp and cur
// tmp = cur.next
// cur.next = prev
// prev = cur
// cur = tmp

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let next = head;
  while (next) {
    let tmp = next.next;
    next.next = prev;
    prev = next;
    next = tmp;
  }

  return prev;
}; // T:O(N) S:O(1)

var reverseList = function (head) {
  let pre = new ListNode();
  let cur = head;
  while (cur) {
    let tmp = cur.next;
    cur.next = pre.next;
    pre.next = cur;
    cur = tmp;
  }

  return pre.next;
}; // T:O(N) S:O(1)
