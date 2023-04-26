//  Merge k Sorted Lists
// https://leetcode.com/problems/merge-k-sorted-lists/description/

// solution like bread first search
// and like merge sort algo
// take every 2 and merge the results
// complexity

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;
  function mergeLists(list1, list2) {
    let pre = new ListNode();
    let cur = pre;
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        cur.next = list1;
        list1 = list1.next;
      } else {
        cur.next = list2;
        list2 = list2.next;
      }
      cur = cur.next;
    }
    cur.next = list1 || list2;
    return pre.next;
  }

  while (lists.length > 1) {
    let level = [];
    for (let i = 0; i < lists.length; i = i + 2) {
      let list1 = lists[i];
      let list2 = lists[i + 1];

      if (list2 == null) {
        level.push(list1);
        continue;
      }
      level.push(mergeLists(list1, list2));
    }
    lists = level;
  }

  return lists[0];
}; // T:O(klogN) S:O(n) AS:O(1)
