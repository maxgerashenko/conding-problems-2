// https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG
// Reverse alternating K-element Sub-list

const reverse_alternate_k_elements = function (
  head,
  k,
  pre = { next: head },
  root = pre
) {
  while (pre.next) {
    let start = pre.next;
    count = k - 1;
    while (start.next && count > 0) {
      let tmp = start.next;
      start.next = tmp.next;
      tmp.next = pre.next;
      pre.next = tmp;
      count--;
    }
    pre = start;
    while (count < k) {
      pre = pre.next;
      count++;
    }
  }
  return root.next;
}; // T:O(N) S:O(1)
