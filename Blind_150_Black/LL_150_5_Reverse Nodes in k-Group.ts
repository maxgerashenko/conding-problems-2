// https://leetcode.com/problems/reverse-nodes-in-k-group/description/
// Reverse Nodes in k-Group

// use reverse ll pre
// use count > 0 to pre check
// use count > 1 to check swaps
// T:O(n) S:O(1)

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let pre = new ListNode();
  let res = pre;
  pre.next = head;
  let cur = head;

  while (cur && cur.next) {
    let tmp = cur;
    let count = k;
    while (tmp && count > 0) {
      tmp = tmp.next;
      count--;
    }
    if (count > 0) break;
    count = k;
    while (cur && cur.next && count > 1) {
      let tmp = cur.next;
      cur.next = tmp.next;
      tmp.next = pre.next;
      pre.next = tmp;
      count--;
    }
    pre = cur;
    cur = cur.next;
  }

  return res.next;
} // T:O(n) S:O(1)
