// https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR
// Reverse every K-elements Sub-list

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

const reverse_every_k_elements = function (head, k) {
  let pre = new Node();
  pre.next = head;
  let origin = pre;
  let cur = pre.next;
  let count = k - 1;
  while (cur && cur.next) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
    count--;
    if (count === 0) {
      pre = cur;
      cur = cur.next;
      count = k - 1;
    }
  }
  return origin.next;
}; // T:O(N) S:O(1)
