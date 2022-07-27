// https://www.educative.io/courses/grokking-the-coding-interview/B819G5DZBxX
//
// Largest Number in a Stream

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
class KthLargestNumberInStream {
  constructor(nums, k) {
    this.k = k;
    this.minHeap = new Heap((x, y) => x - y);
    for (let num of nums) this.add(num);
  }

  add(num) {
    if (this.minHeap.arr.length < this.k) {
      this.minHeap.push(num);
      return this.minHeap.arr[0];
    }
    if (num > this.minHeap.arr[0]) {
      this.minHeap.push(num);
      this.minHeap.pop(num);
    }
    return this.minHeap.arr[0];
  }
} // T:O(logK) S:O(K)
