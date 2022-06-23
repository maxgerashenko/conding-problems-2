// https://www.educative.io/courses/grokking-the-coding-interview/N7pvEn86YrN
// Start of LinkedList Cycle

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

const find_cycle_start = function (head) {
  // use Floyds algorithm to find the start of the cycle
  // use slow and fast pointer to find a meeting point
  // the distance between the meeting point and cycle start
  // and start of the list and cycle start is equal
  // - use 2 pointers fast and slow to find a meeting point
  // - set start to the list start
  // - iterate start and end from meeting point
  // - when start will equal meeting point
  // - then end will equal cycle start

const find_cycle_start = function (head) {
  let slow = head && head.next;
  let fast = slow && slow.next;

  while (fast && slow && fast.value !== slow.value) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }
  slow = head;
  while (slow.value !== fast.value) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}; // T:O(N) S:O(1)
