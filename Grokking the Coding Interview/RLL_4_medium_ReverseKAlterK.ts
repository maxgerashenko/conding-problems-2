// https://www.educative.io/courses/grokking-the-coding-interview/m2YYJJRP9KG
// Reverse alternating K-element Sub-list

const reverse_every_k_elements = function(head, k) {
  let pre = new Node();
  pre.next = head;
  let origin = pre;
  let cur = pre.next;
  let count = k - 1;
  while(cur && cur.next){
    let tmp = cur.next;
    cur.next = tmp.next;
    tmp.next = pre.next;
    pre.next = tmp;
    count--;
    if(count === 0) {
      pre = cur;
      cur = cur.next;
      count = k - 1;
    }
  }
  return origin.next;
} // T:O(N) S:O(1)
