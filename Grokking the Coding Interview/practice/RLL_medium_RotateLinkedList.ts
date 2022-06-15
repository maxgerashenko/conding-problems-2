// https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R
// Rotate a LinkedList

// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

const rotate = function(head, rotations) {
  // Rotate K elements

  // find the length
  // connect end with head
  // find new end len-k-1
  // set new head el = len-K
  // return new head

  // conner case
  if (head == null || head.next == null || rotations === 0) return head;

  // find length
  let len = 1;
  tmp = head;
  while (tmp.next != null) {
    tmp = tmp.next;
    len++;
  }

  tmp.next = head;

  let newEndIndex = len - (rotations % len);
  let newEnd = head;
  let i = 0;
  while (i < newEndIndex - 1) {
    newEnd = newEnd.next;
    i++;
  }

  let newHead = newEnd.next;
  newEnd.next = null;

  return newHead;
}; // T:O(N+N+N-1) S:O(1)
