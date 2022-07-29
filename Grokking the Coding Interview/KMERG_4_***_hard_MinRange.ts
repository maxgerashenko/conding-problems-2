// Smallest Number Range (Hard)
//
// https://www.educative.io/courses/grokking-the-coding-interview/JPGWDNRx3w2

// Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const find_smallest_range = function (
  lists,
  minRange = [0, Infinity],
  minHeap = new Heap((x, y) => x.val - y.val)
) {
  for (let list of lists) minHeap.push({ val: list.shift(), list });
  while (minHeap.arr.length === lists.length) {
    let { val: min, list } = minHeap.pop();
    let max = minHeap.arr.reduce((pre, el) => Math.max(pre, el.val), -Infinity);
    if (max - min < minRange[1] - minRange[0]) minRange = [min, max];
    list.length > 0 && minHeap.push({ val: list.shift(), list });
  }
  return minRange;
}; // T:O(NlogL) S:O(L)
