// Merge Two Sorted Lists
//
// https://leetcode.com/problems/merge-two-sorted-lists/submissions/

var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let cur = new ListNode();
  const head = cur;

  while (list1 && list2) {
    cur.next = new ListNode();
    cur = cur.next;
    if (list1.val <= list2.val) {
      cur.val = list1.val;
      list1 = list1.next;
    } else {
      cur.val = list2.val;
      list2 = list2.next;
    }
  }

  if (list1) {
    cur.next = list1;
  }
  if (list2) {
    cur.next = list2;
  }

  return head.next;
}; //T:O(m+n) S:O(n+m)
