// https://leetcode.com/problems/reverse-linked-list-ii/
// Reverse Linked List II

// https://www.youtube.com/watch?v=wk8-_M-2fzI

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // Constraints
    // 1<= n <=100
    // - <= val <= +
    // 1 <= left <= rigth
    
    // Algorithm
    // need to set left element to proper element
    // revers cur left and next elent
    // repeat untill next el is right
    // to cover conner case add dummy node in the begining
    
    let dummy = {next: head};
    
    // init start
    let prev = dummy,
        cur = prev.next;
    for(let i=1;i<left;i++){
        cur = cur.next;
        prev = prev.next;
    }
    
    // iterate and reverse
    let next ;
    for(let i=left;i<right;i++) {
        next = cur.next;
        cur.next = next.next;
        next.next = prev.next;
        prev.next = next;
    } // O(n)
    
    // Return the result of reverted list
    return dummy.next;
}; // O(n)
