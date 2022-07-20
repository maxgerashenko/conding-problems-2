// https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0
//
// Connect Ropes

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

const minimum_cost_to_connect_ropes = function (
  ropeLengths,
  result = 0,
  minHeap = new Heap((x, y) => x - y)
) {
  for (let rope of ropeLengths) {
    minHeap.push(rope);
  }
  if (ropeLengths.length === 0) return 0; // conner case
  if (ropeLengths.length === 1) return ropeLengths[0]; // conner case
  let sum = minHeap.pop() + minHeap.pop();
  result += sum;
  while (minHeap.arr.length > 0) {
    sum += minHeap.pop();
    result += sum;
  }
  return result;
}; // T:O(NlogN) S:O(N)
