// Smallest Number in M Sorted Lists (Medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/myAqDMyRXn3

// Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const find_Kth_smallest = function (
  lists,
  k,
  number = null,
  minHeap = new Heap((x, y) => x.val - y.val)
) {
  for (let list of lists) minHeap.push({ val: list.shift(), list });
  while (k > 0 && minHeap.arr.length > 0) {
    k--;
    let { val, list } = minHeap.pop();
    number = val;
    if (list.length === 0) continue;
    minHeap.push({ val: list.shift(), list });
  }

  return k === 0 ? number : -1;
}; // T:O(NlogK) S:O(K)
