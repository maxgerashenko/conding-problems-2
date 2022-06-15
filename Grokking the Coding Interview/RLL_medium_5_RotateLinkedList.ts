// https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R
// Rotate a LinkedList

// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

const rotate = function (head, rotations) {
  // conner case
  if (!head || rotations < 1) return head;

  // lenth
  let last = head;
  let length = 1;
  while (last.next) {
    last = last.next;
    length++;
  }

  // find pre
  let splitCount = rotations % length;
  let pre = head;
  while (splitCount - 1 > 0) {
    pre = pre.next;
    splitCount--;
  }

  let tmp = pre.next;
  pre.next = null;
  let root = tmp;
  last.next = head;

  return root;
}; // T:O(2n) S:O(1)
