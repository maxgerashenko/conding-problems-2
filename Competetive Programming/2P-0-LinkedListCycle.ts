// Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function(head) {
  // Constraints
  // 0 <= n <= ...

  if (!head) return false;

  // Use fast and slow index
  let slow = head;
  let fast = head.next && head.next.next;
  while (slow && fast) {
    // if ref to nodes are equal it is a cycle
    if (slow === fast) return true;
    // otherwise move forward
    slow = slow.next;
    fast = fast.next && fast.next.next;
  } // O(n)

  return false;
};
