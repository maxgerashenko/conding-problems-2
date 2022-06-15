// https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG
// Reverse alternating K-element Sub-list

const reverse_alternate_k_elements = function(head, k) {
  // Reverse every k element

  // iterate the list from the start

  // set pre element

  // reverse
  // t-c.n-t.n-t.n-pre.n-pre.n-tmp

  // skipt k-1 element, coz reverse 2 elements
  // by updating pre position

  // conner case
  if (head == null || head.next == null || k < 2) return head;

  let newHead = null;

  // revert
  let pre = new Node();
  pre.next = head;
  while (true) {
    let i = 0;
    let cur = pre.next;
    while (cur != null && cur.next != null && i < k - 1) {
      let tmp = cur.next;
      cur.next = tmp.next;
      tmp.next = pre.next;
      pre.next = tmp;
      i++;
    }

    // update new head;
    if (newHead == null) {
      newHead = pre.next;
    }

    if (cur != null && cur.next != null) return newHead;

    // skipt
    i = 0;
    pre = cur;
    while (i < k) {
      // base case
      if ((pre.next = null)) return newHead;

      pre = pre.next;
    }
  }
}; // T:O(N-1) S:O(1)
