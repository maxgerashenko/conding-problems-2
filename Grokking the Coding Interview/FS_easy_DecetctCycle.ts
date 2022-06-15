// https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D
// LinkedList Cycle

// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.

const has_cycle = function(head) {
  // find the cycle
  // use 2 fast and slop pointers from one side
  // if fast is equal null there is no cycle
  // if fast === slow there is a cycle

  // !!! use let
  let slow = head;
  let fast = head;

  while (fast != null && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) return true;
  }

  return false;
};
