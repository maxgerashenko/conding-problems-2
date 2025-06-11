
// https://leetcode.com/problems/merge-k-sorted-lists/
//
// Merge k Sorted Lists

// MinHeap + LL

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const minHeap = new MinHeap();
    const top = new ListNode();
    let cur = top;

    for (let head of lists)
        minHeap.insert(head);

    while (minHeap.isEmpty() == false) {
        let min = minHeap.remove();
        if (min == null) break; // conner case

        cur.next = new ListNode();
        cur = cur.next;
        cur.val = min.val;
        min = min.next;
        if (min == null) continue; // last element
        minHeap.insert(min);
    }

    return top.next;
}; // T:O(nlogk) S:O(1)