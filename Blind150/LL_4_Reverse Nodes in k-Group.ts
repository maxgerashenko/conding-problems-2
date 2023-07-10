// https://leetcode.com/problems/reverse-nodes-in-k-group/description/
// Reverse Nodes in k-Group

// LL
// Reverse LL
// pre, cur
// while(cur, cur.next)
// tmp = cur.next
// cur.next = tmp.next
// tmp.next = pre.next
// pre.next = tmp
// count = k - 1;
// Check group lenght before going forward
// T:O(1) S:O(1)

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let res = new ListNode();
  let pre = res;
  pre.next = head;
  let cur = pre.next;
  while (cur && cur.next) {
    let count = k - 1;
    let check = cur;
    while (check && count) {
      check = check.next;
      count--;
    }
    if (check == null) break;
    count = k - 1;
    while (cur && cur.next && count) {
      let tmp = cur.next;
      cur.next = tmp.next;
      tmp.next = pre.next;
      pre.next = tmp;
      count--;
    }
    pre = cur;
    cur = pre.next;
  }

  return res.next;
} // T:O(1) S:O(1)
