// https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR
// Reverse every K-elements Sub-list

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

const reverse_every_k_elements = function (head, k) {
  let root = {};
  root.next = head;
  let pre = root;
  while (pre.next) {
    let count = k - 1;
    let start = pre.next;
    while (start.next && count > 0) {
      let tmp = start.next;
      start.next = tmp.next;
      tmp.next = pre.next;
      pre.next = tmp;
      count--;
    }
    pre = start;
  }
  return root.next;
}; // T:O(N) S:O(1)
