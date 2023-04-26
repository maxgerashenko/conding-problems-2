// Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let pre = new ListNode();
  pre.next = head;
  let left = pre;
  let right = head;

  while (n > 0) {
    right = right.next;
    n--;
  }
  while (right) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next; // !!!!

  return pre.next;
}; // T:O(N) S:O(1)
