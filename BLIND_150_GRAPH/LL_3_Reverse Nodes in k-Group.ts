// https://leetcode.com/problems/reverse-nodes-in-k-group/
// 
// Reverse Nodes in k-Group

// prevEnd - start - end - nextStart
// prevEnd - end - start - nextStart

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let zero = new ListNode(0);
    zero.next = head;
    let prevEnd = zero;

    while (head !== null) {
        let start = prevEnd.next;
        let end = start;

        let i = k;
        while (end !== null && i > 1) {
            end = end.next;
            i--;
        }
        if (end == null) break;
        let nextStart = end.next;

        let pre = null;
        let cur = start;
        while (cur !== nextStart) {
            let tmp = cur.next;
            cur.next = pre;
            pre = cur;
            cur = tmp;
        }

        start.next = nextStart;
        prevEnd.next = pre;
        prevEnd = start;
        head = nextStart;
    }

    return zero.next;
}; // T:O(n) S:O(1)