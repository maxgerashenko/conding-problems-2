// https://leetcode.com/problems/reorder-list/
// Reorder List

// find half with fast and slow
// reverse second
// use pre = null to avoid links problem
// merge 2 lists with new node
// second to first

// while (second) {
//    let tmp = first.next;
//    first.next = second;
//    first = first.next;
//    second = tmp;
// }

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
    fast = fast.next;
  }
  let cur = slow.next;
  slow.next = null;
  let pre = null;
  while (cur) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  let second = pre;
  let first = head;
  while (second) {
    let tmp = first.next;
    first.next = second;
    first = first.next;
    second = tmp;
  }
  return pre;
}; // T:O(N) S:O(1)
