// https://www.educative.io/courses/grokking-the-coding-interview/YQJ4mr7yOrW
// Rearrange a LinkedList

// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the LinkedList are inserted alternately to the nodes from the first half in reverse order. So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

function reorder(head) {
  // Zip merge sorted linked list

  // use 2 pointers from 1 side as Fast & Slow
  // Reverse second part
  // ZiP fist and second part

  // conner case
  if (!head || !head.next) {
    return head;
  }

  // find the middle
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow is the last of the first part

  // reverse the list in place
  let current = slow.next;
  while (current.next != null) {
    let tmp = current.next;
    current.next = tmp.next;
    tmp.next = slow.next;
    slow.next = tmp;
  }

  // zip first and second part
  firstPart = head;
  secondPart = slow.next;
  // every array should end up with null
  slow.next = null;

  firstPart.print_list();
  secondPart.print_list();

  while (firstPart !== null && secondPart !== null) {
    let tmp = firstPart.next;
    firstPart.next = secondPart;
    firstPart = tmp;

    tmp = secondPart.next;
    secondPart.next = firstPart;
    secondPart = tmp;
  }
} // T: O(N) S: O(1)
