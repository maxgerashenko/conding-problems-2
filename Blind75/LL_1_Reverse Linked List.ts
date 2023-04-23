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
  let pre = null;
  while (head) {
    let tmp = head.next;
    head.next = pre;
    pre = head;
    head = tmp;
  }
  return pre;
}; // T:O(N) S:O(1)
