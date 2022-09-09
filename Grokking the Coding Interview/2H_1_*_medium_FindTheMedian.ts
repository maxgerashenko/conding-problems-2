// https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4
//
// Find the Median of a Number Stream

// Design a class to calculate the median of a number stream

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
    this.remove = (toDelete) =>
      (this.arr = this.arr.filter((el) => el !== toDelete));
  }
}
class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap((x, y) => y - x);
    this.minHeap = new Heap((x, y) => x - y);
  }
  rebalance() {
    if (this.maxHeap.arr.length > this.minHeap.arr.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
      return;
    }
    if (this.maxHeap.arr.length < this.minHeap.arr.length)
      this.maxHeap.push(this.minHeap.pop());
  }
  insert_num(num) {
    this.maxHeap.length === 0 || num < this.maxHeap.arr[0]
      ? this.maxHeap.push(num)
      : this.minHeap.push(num);
    this.rebalance();
  }
  find_median(self) {
    return this.maxHeap.arr.length === this.minHeap.arr.length
      ? this.maxHeap.arr[0] / 2 + this.minHeap.arr[0] / 2
      : this.maxHeap.arr[0];
  }
} // T:O(logN) S:O(2N)
