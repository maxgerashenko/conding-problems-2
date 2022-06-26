// https://www.educative.io/courses/grokking-the-coding-interview/YQJ4mr7yOrW
// Rearrange a LinkedList

// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

const reorder = function (head) {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let pre = slow.next;
  let start = pre.next;
  while (start.next) {
    let tmp = start.next;
    start.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
  }

  let first = head;
  let second = pre.next;
  pre.next = null;
  while (first.next && second.next) {
    let tmp = first.next;
    first.next = second;
    first = tmp;
    tmp = second.next;
    second.next = first;
    second = tmp;
  }

  return first;
} // T:O(N) S:O(1)
