// Merge + MinHeap
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
