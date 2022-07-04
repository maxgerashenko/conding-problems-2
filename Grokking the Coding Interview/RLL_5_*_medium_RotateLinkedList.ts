// https://www.educative.io/courses/grokking-the-coding-interview/mErolRNQ00R
// Rotate a LinkedList

// Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

const rotate = function (head, rotation) {
  let pre = new Node();
  pre.next = head;
  let cur = pre.next;
  let len = 0;
  while (cur) {
    cur = cur.next;
    len++;
  }
  rotation = rotation % len;
  while (rotation > 0) {
    rotation--;
    pre = pre.next;
  }
  cur = pre.next;
  while (cur.next) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }
  let second = pre.next;
  cur.next = head;
  while (head.value !== pre.value) {
    head = head.next;
  }
  head.next = null;
  return second;
}; // T:O(N) S:O(1)
