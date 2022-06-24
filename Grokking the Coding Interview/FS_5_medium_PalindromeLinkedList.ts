// https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ
// Palindrome LinkedList

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

const is_palindromic_linked_list = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let pre = slow;
  let fixed = slow.next;
  while (fixed.next != null) {
    let tmp = fixed.next;
    fixed.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }

  let start = head;
  let middle = fast == null ? pre : pre.next;
  while (start.value === middle.value) {
    start = start.next;
    middle = middle.next;
    if (middle.next == null) return true;
  }

  return false;
}; // T:O(N)  S:O(1)
