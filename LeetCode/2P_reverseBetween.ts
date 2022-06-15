// https://leetcode.com/problems/reverse-linked-list-ii/
// reverseBetween

var reverseBetween = function(head, left, right) {
    // Constraints
    // 1 <= list.length
    // head <= left <= right
    
    // Algorithm 
    // Use pre and tmp element to reverse the list
    
    let pre = {next: head};
    
    // move pre to inint positions
    let index = 1
    while(index < left){
        pre = pre.next;
        index++;
    }
    
    // start reversing;
    let cur = pre.next;
    while(index < right) {
        let tmp = cur.next;
        cur.next = tmp.next;
        tmp.next = pre.next
        pre.next = tmp;
        index++;
    }
    
    // conner case [5] 1, 1
    // conner case [3,5] 1,2
    
    return pre.next
};
