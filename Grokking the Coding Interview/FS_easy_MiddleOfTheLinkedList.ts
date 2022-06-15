// https://www.educative.io/courses/grokking-the-coding-interview/3j5GD3EQMGM
// Middle of the LinkedList

const find_middle_of_linked_list = function(head) {
  // return the middle node of the single linked list
  // use 2 pointes from 1 side, fast and slow
  // fast is fast.next.next
  // slow is slow.next
  // when fast reach the end slow is in the middle
  // when fast reach the end slow is in the middle

  // 1 2
  // s
  // f

  // 1 2 3 4
  // s s
  // f   f

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
