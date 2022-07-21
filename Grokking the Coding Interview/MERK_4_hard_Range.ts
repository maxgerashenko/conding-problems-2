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
function find_smallest_range(
  lists,
  range = [0, Infinity],
  max = -Infinity,
  minHeap = new Heap((x, y) => x.val - y.val),
  k = lists.length
) {
  // put the 1st element of each array in the max heap
  for (let list of lists) {
    let val = list.shift();
    minHeap.push({ val, list });
    max = Math.max(max, val);
  }
  // take the smallest(top) element from the min heap, if it gives us smaller range, update the ranges
  // if the array of the top element has more elements, insert the next element in the heap
  while (minHeap.arr.length === k) {
    let { val, list } = minHeap.pop();
    range = range[1] - range[0] > max - val ? [val, max] : range;
    if (list.length === 0) continue;
    // insert the next element in the heap
    val = list.shift();
    minHeap.push({ val, list });
    max = Math.max(max, val);
  }
  return range;
} // T:O(NlogK) S:(K)
