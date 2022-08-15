// https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
// LinkedList Cycle

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

const has_cycle = function (head, slow = head, fast = head) {
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}; // T:O(N) S:O(1)
