// https://leetcode.com/problems/merge-k-sorted-lists/description/
// Merge k Sorted Lists

// use merge sort
// use merge function
// use continuous queque
// merge each pair
//
var mergeKLists = function (lists) {
  if (lists.length < 2) return lists.pop() || null; //conner case
  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();
    lists.push(merge(l1, l2));
  }
  return lists.pop();
}; // T: O(Nlogk) S:O(1)

function merge(l1, l2) {
  let res = new ListNode();
  let cur = res;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
      continue;
    }
    cur.next = l2;
    cur = cur.next;
    l2 = l2.next;
  }
  if (l1) {
    cur.next = l1;
  }
  if (l2) {
    cur.next = l2;
  }
  return res.next;
} // T:O(nLogk) S:O(1)

// Merge + MinHeap
// get el add to MinHeap
// do until parallels are not empty
// T:O(nlogk) S:O(k)
var mergeKLists = function (lists) {
  if (lists == null || lists.length === 0) return null;
  const minHeap = new MinPriorityQueue({ priority: (x) => x.val });

  // add first elements to heap
  for (let el of lists) {
    el && minHeap.enqueue(el);
  }

  let pre = new ListNode();
  let cur = pre;
  while (!minHeap.isEmpty()) {
    let el = minHeap.dequeue().element;
    el.next && minHeap.enqueue(el.next);
    cur.next = el;
    cur = cur.next;
  }

  return pre.next;
}; // T: O(Nlogk) S:O(K)
