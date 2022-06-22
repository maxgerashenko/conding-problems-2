// https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
// LinkedList Cycle

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

const has_cycle = function (head) {
  let fast = head;
  let slow = head;

  while (slow != null && slow.next != null) {
    slow = slow.next;
    fast = fast && fast.next && fast.next.next;
    if (fast && slow && fast.value === slow.value) return true;
  }

  return false;
}; // T:O(N) S:O(N)
