// Reverse a Sub-list
//
// https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2

const reverse_sub_list = function (head, p, q) {
  let pre;
  let tmp = new Node();
  tmp.next = head;
  while (tmp.next) {
    if (tmp.next.value === p) {
      pre = tmp;
      break;
    }
    tmp = tmp.next;
  }
  let cur = pre.next;
  while (cur.next && cur.next.value != q) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }

  return head;
}; // T:O(N) S:O(1)
