// Merge K Sorted Lists
//
// https://www.educative.io/courses/grokking-the-coding-interview/Y5n0n3vAgYK

// Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

class Heap {
  constructor(sort) {
    this.arr = [];
    this.sort = sort;
  }
  push(el) {
    this.arr.push(el);
    this.arr.sort((a, b) => this.sort(a, b));
  }
  pop() {
    let tmp = this.arr.shift();
    this.arr.sort((a, b) => this.sort(a, b));
    return tmp;
  }
}
const merge_lists = function (
  lists,
  resultHead = null,
  minHeap = new Heap((x, y) => x.value - y.value)
) {
  for (let list of lists) minHeap.push(list);
  resultHead = minHeap.pop();
  let tmp = resultHead;
  minHeap.push(resultHead.next);
  while (minHeap.arr.length > 0) {
    tmp.next = minHeap.pop();
    tmp = tmp.next;
    if (tmp.next == null) continue;
    minHeap.push(tmp.next);
  }
  return resultHead;
}; // T:O(NlogK) S:O(N)
