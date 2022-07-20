// Kth Smallest Number in a Sorted Matrix (Hard)
//
// https://www.educative.io/courses/grokking-the-coding-interview/x1NJVYKNvqz

// Given an N * N matrix where each row and column is sorted in ascending order, find the Kth smallest element in the matrix.

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
  matrix,
  k,
  number,
  minHeap = new Heap((x, y) => x.val - y.val)
) {
  for (let row of matrix) minHeap.push({ val: row.shift(), row });
  while (k > 0 && minHeap.arr.length > 0) {
    k--;
    let { val, row } = minHeap.pop();
    number = val;
    if (row.lenght === 0) continue;
    minHeap.push({ val: row.shift(), row });
  }
  return k > 0 ? -1 : number;
}; // T:O(NlogK) S:O(N)
