// https://lenchen.medium.com/leetcode-142-linked-list-cycle-ii-7dd1dc691797

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // Constraints
    // length [0, 10]
    // val [-10, 10]
    // pos -1 or index [0,10]
    // O(1) - memory
    // don't modify the list
    
    
    // --- HashSet Solution
//     // easy win
//     if(head == null || head.next == null) return null;
    
//     let map = new Set(),
//         tmp = head;
//     while(tmp != null){
//         // if node exist it is a loop
//         if(map.has(tmp)){
//             return tmp;
//         }
//         // remember the nodes in the map
//         map.add(tmp);
//         tmp = tmp.next;
//     }
//     return null;
    
    // Ffloyds sycle Detection
    
    // Easy win first
    if(!head) return null;

    // classic fast and slow
    let slow = head,
        fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow == fast) {
            break;
        }
    }
    
    // there is no cycle detected
    if(!fast || !fast.next) return null;

    // x mod l = z
    slow = head;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};