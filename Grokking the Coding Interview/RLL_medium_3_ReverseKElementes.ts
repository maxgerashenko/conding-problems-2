// https://www.educative.io/courses/grokking-the-coding-interview/RMZylvkGznR
// Reverse every K-elements Sub-list

// Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

const reverse_every_k_elements = function (head, k) {
  // conner case
  if (!head || !head.next || k < 1) return head;

  let pre = new Node();
  pre.next = head;
  let root = pre;

  let cur = pre.next;
  while (cur.next) {
    let count = k;
    cur = pre.next;
    while (cur.next && count > 1) {
      let tmp = cur.next;
      cur.next = tmp.next;
      tmp.next = pre.next;
      pre.next = tmp;
      count--;
    }
    pre = cur;
  }

  // base case
  return root.next;
}; // T:O(n) S:O(1)
