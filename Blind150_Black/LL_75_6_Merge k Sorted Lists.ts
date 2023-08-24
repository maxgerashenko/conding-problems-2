// Merge + MinHeap
var mergeKLists = function (lists) {
  const minHeap = new MinPriorityQueue({ priority: (el) => el.val });

  for (let el of lists) {
    el && minHeap.enqueue(el);
  }

  let pre = new ListNode();
  let cur = pre;
  while (!minHeap.isEmpty()) {
    let el = minHeap.dequeue().element;
    cur.next = el;
    cur = cur.next;
    el.next && minHeap.enqueue(el.next);
  }

  return pre.next;
}; // T(nlogK) S:O(n)
