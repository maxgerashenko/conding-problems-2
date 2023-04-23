# conding-problems-oajgfe

/\*\*

- Definition for singly-linked list.
- function ListNode(val, next) {
-     this.val = (val===undefined ? 0 : val)
-     this.next = (next===undefined ? null : next)
- }
  \*/
  /\*\*
- @param {ListNode} head
- @return {ListNode}
  \*/
  var reverseList = function(head) {
  prev = null;
  next = head;
  while(next){
  let tmp = next.next;
  next.next = prev;
  prev = next;
  next = tmp;
  }

      return prev

  }; // T:O(N) S:O(N)
