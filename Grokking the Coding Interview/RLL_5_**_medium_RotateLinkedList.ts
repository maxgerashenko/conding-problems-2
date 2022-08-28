// https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R
// Rotate a LinkedList

// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

const rotate = function (
  head,
  rotations,
  pre = { next: head },
  root = pre,
  len = 0
) {
  while (pre.next && len < rotations - 1) {
    pre = pre.next;
    len++;
    if (pre.next == null) {
      rotations %= len;
      pre = root;
      len = 0;
    }
  }
  if (len === rotations - 1) return root.next;
  root.next = pre.next;
  let end = pre.next;
  while (end.next) end = end.next;
  end.next = head;
  pre.next = null;
  return root.next;
}; // T:O(N) S:O(1)
