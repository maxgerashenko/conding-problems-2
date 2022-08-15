// https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ
// Palindrome LinkedList

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

// while fast.next && fast.next.next != null

const is_palindromic_linked_list = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let pre = slow;
  let start = pre.next;
  while (start.next) {
    let tmp = start.next;
    start.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }

  let first = head;
  let second = pre.next;
  while (first && second) {
    if (first.value !== second.value) return false;
    first = first.next;
    second = second.next;
  }

  return true;
}; // T:O(N) S:O(1)
