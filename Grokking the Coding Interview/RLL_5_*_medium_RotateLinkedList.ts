// https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R
// Rotate a LinkedList

// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

const rotate = function (head, r, root = { next: head }, pre = root) {
  let len = 0;
  while (r > 0) {
    if (pre.next == null) {
      r %= len;
      pre = root;
      continue;
    }
    pre = pre.next;
    r--;
    len++;
  }
  let newHead = pre.next;
  pre.next = null;
  let newEnd = newHead;
  while (newEnd.next) newEnd = newEnd.next;
  newEnd.next = head;
  return newHead;
}; // T:O(N) S:O(1)
