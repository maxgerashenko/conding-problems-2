var isPalindrome = function(head) {
  // return true if head is empty or only one
  if (head == null || head.next == null) return true;

  let slow = head;
  let fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Think it that way
  // 1 last is next after slow
  // tmp is next after last
  // tmp should be in the begining
  // tmp should ponit to the $next after slow
  // need to connect a gap last next is tmp next

  let last = slow.next;
  while (last.next) {
    let tmp = last.next;
    last.next = tmp.next;
    tmp.next = slow.next;
    slow.next = tmp;
  }

  while (slow.next) {
    slow = slow.next;
    if (head.val !== slow.val) return false;
    head = head.next;
  }

  return true;
};
