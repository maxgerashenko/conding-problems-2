// https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0
//
// Connect Ropes

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
function minimum_cost_to_connect_ropes(
  ropeLengths,
  minHeap = new Heap((x, y) => x - y),
  res = 0
) {
  for (let rope of ropeLengths) minHeap.push(rope);
  while (minHeap.arr.length > 1) {
    let sum = minHeap.pop() + minHeap.pop();
    res += sum;
    minHeap.push(sum);
  }
  return res;
} // T:O(NlogN) S:O(N)
