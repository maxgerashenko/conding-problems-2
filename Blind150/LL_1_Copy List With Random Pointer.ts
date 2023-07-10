// Copy List With Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/

// LL
// 2 passes al
// go throw all elements
// Copy all elements with out links
// go thrwo all elements
// Copy all connections of the lements
// Use Map and key as element it selft
// Return Map.get(header) as a header copy

function copyRandomList(head: Node | null): Node | null {
  if (head == null) return null; // coner case
  let hashMap = new Map(); // coner case
  hashMap.set(null, null);

  let cur = head;
  while (cur) {
    hashMap.set(cur, new Node(cur.val));
    cur = cur.next;
  }

  cur = head;
  while (cur) {
    let { val, next, random } = cur;
    let copy = hashMap.get(cur);
    copy.next = hashMap.get(cur.next);
    copy.random = hashMap.get(cur.random);
    cur = cur.next;
  }

  return hashMap.get(head);
} // T:O(2n) S:O(n)
