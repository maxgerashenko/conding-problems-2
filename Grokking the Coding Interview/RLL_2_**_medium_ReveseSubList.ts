// Reverse a Sub-list
//
// https://www.educative.io/courses/grokking-the-coding-interview/qVANqMonoB2

const reverse_sub_list = function (
  head,
  s,
  e,
  pre = { next: head },
  root = head
) {
  while (pre.next && pre.next.value != s) pre = pre.next;
  let start = pre.next;
  while (start.next && pre.next.value != e) {
    let tmp = start.next;
    start.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }
  return root;
}; // T:O(N) S:O(1)
