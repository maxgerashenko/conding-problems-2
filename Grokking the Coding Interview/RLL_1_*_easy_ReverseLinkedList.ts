// https://www.educative.io/courses/grokking-the-coding-interview/3wENz1N4WW9
// Reverse a LinkedList

const reverse = function (head) {
  let pre = { next: head };
  let cur = pre.next;
  while (cur.next) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }
  return pre.next;
}; // T:O(N) S:O(1)

// Separated option
const reverse = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  return pre;
}; // T:O(N) S:O(1)
