// https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG
// Reverse alternating K-element Sub-list

const reverse_alternate_k_elements = function (head, k) {
  let pre = new Node();
  let origin = pre;
  pre.next = head;
  let cur = pre.next;
  let count = k - 1;
  while (cur && cur.next) {
    tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
    count--;
    if (count === 0) {
      while (cur.next && count < k) {
        count++;
        cur = cur.next;
      }
      pre = cur;
      cur = pre.next;
      count = k - 1;
    }
  }

  return origin.next;
}; // T:O(N) S:O
