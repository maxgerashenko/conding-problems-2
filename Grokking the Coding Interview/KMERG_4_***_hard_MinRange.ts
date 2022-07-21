// Smallest Number Range (Hard)
//
// https://www.educative.io/courses/grokking-the-coding-interview/JPGWDNRx3w2

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
  k = lists.length,
  max = -Infinity,
  range = [-Infinity, Infinity],
  minHeap = new Heap((x, y) => x.val - y.val)
) {
  for (let list of lists) {
    let val = list.shift();
    minHeap.push({ val, list });
    max = Math.max(max, val);
  }
  while (minHeap.arr.length === k) {
    let { val, list } = minHeap.pop();
    let [start, end] = range;
    range = max - val < end - start ? [val, max] : range;
    val = list.shift();
    if (!list.length) break;
    minHeap.push({ val, list });
    max = Math.max(max, val);
  }
  return range;
}; // T:O(NlogK) S:O(K)
