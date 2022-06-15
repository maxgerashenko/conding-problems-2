// https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG
// Reverse alternating K-element Sub-list

const reverse_alternate_k_elements = function (head, k) {
  // reverse
  // count
  // update pre
  // root

  // conner case
  if (!head || !head.next || k < 2) return head;

  let pre = new Node();
  pre.next = head;
  let root = pre;

  let cur = pre.next;
  let count = k;
  while (cur.next) {
    count = k;
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

  return root.next;
}; // T:O(n) T:O(1);
