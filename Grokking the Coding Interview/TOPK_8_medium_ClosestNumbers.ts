// https://www.educative.io/courses/grokking-the-coding-interview/N8MJQNYyJPL
//
// Closest Numbers

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const find_closest_elements = function (
  arr,
  k,
  X,
  maxHeap = new Heap((x, y) => Math.abs(y - X) - Math.abs(x - X))
) {
  for (let i = 0; i < k; i++) maxHeap.push(arr.shift());
  for (let el of arr) {
    if (Math.abs(el - X) < Math.abs(maxHeap.arr[0] - X)) {
      maxHeap.push(el);
      maxHeap.pop(el);
    }
  }
  return maxHeap.arr;
}; // T:O(NLogK) S:O(K)
