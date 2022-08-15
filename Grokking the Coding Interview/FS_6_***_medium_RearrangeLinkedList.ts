// https://www.educative.io/courses/grokking-the-coding-interview/YQJ4mr7yOrW
// Rearrange a LinkedList

// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

const reorder = function (head, slow = head, fast = head) {
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
  let res = {};
  let s1 = head;
  let s2 = pre.next;
  pre.next = null;
  while (s1 || s2) {
    if (s1) {
      res.next = s1;
      res = res.next;
      s1 = s1.next;
    }
    if (s2) {
      res.next = s2;
      res = res.next;
      s2 = s2.next;
    }
  }
  return head;
}; // T:O(N) S:O(1)
