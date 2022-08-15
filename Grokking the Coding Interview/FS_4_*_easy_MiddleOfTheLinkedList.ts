// https://www.educative.io/courses/grokking-the-coding-interview/3j5GD3EQMGM
// Middle of the LinkedList

// return the middle node of the single linked list
// use 2 pointes from 1 side, fast and slow
// fast is fast.next.next
// slow is slow.next
// when fast reach the end slow is in the middle
// when fast reach the end slow is in the middle
const find_middle_of_linked_list = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}; // T:O(N) S:O(1)
