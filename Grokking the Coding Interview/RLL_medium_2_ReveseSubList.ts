// Reverse a Sub-list
//
// https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2

const reverse_sub_list = function (head, p, q) {
  // conner case
  if (!head || !head.next) return head;

  let pre = head;
  while (pre.next && pre.next.value !== p) {
    pre = pre.next;
  }

  let cur = pre.next;
  while (cur.next) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;

    if (pre.next.value === q) break;
  }

  return pre;
}; // T:O(n) S:O(1)
