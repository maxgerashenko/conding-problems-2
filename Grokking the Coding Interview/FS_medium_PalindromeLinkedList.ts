// https://www.educative.io/courses/grokking-the-coding-interview/B1PzmqOKDLQ
// Palindrome LinkedList

// Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
// Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

const is_palindromic_linked_list = function(head) {
  // Is Palindrom given linked linst

  // slow = slow.next
  // fast = fast.next && ast.next.next

  // reverse
  // head
  // curent = head.next
  //
  // tmp = curent.next
  // current.next = tmp.next
  // tmp.next = head.next
  // head.next = tmp

  // h  c  t
  // 3->4->5->6->null
  // h     c  t
  // 3->5->4->6->null
  // h        c  t
  // 3->6->5->4->null

  // use Fast and Slow
  // find the middle of the list
  // revers second part of the list
  // compare first and second part
  // reverse second part back
  // if all el === then palidrom
  // if not isPalindrom false

  if (head == null && head.next == null) return true;

  let test = head;
  let arr = [];
  while (test != null) {
    arr.push(test.value);
    test = test.next;
  }

  let isPalidrome = true;

  let slow = head;
  let fast = head;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // revert the second part
  let prev = slow;
  let cur = prev.next;
  while (cur.next != null) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = prev.next;
    prev.next = tmp;
  }

  // iterate to check if palindrom
  let middle = prev.next;
  let start = head;
  while (middle.next != null) {
    if (start.value !== middle.value) {
      isPalidrome = false;
      break;
    }
    start = start.next;
    middle = middle.next;
  }

  // return the order
  cur = prev.next;
  while (cur.next != null) {
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = prev.next;
    prev.next = tmp;
  }

  return isPalidrome;
}; // O(N); O(1)
