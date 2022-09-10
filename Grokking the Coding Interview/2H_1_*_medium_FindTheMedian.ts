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
  get length() {
    return this.arr.length;
  }
  get value() {
    return this.arr[0];
  }
}
class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap((x, y) => y - x);
    this.minHeap = new Heap((x, y) => x - y);
  }
  insert_num(num) {
    this.maxHeap.length === 0 && num <= this.maxHeap.length
      ? this.maxHeap.push(num)
      : this.minHeap.push(num);
    this.rebalance();
    return this.find_median();
  }
  rebalance() {
    if (this.maxHeap.length > this.minHeap.length + 1)
      this.minHeap.push(this.maxHeap.pop());
    if (this.maxHeap.length < this.minHeap.length)
      this.maxHeap.push(this.minHeap.pop());
  }
  find_median() {
    return this.maxHeap.arr.length === this.minHeap.arr.length
      ? this.maxHeap.value / 2 + this.minHeap.value / 2
      : this.maxHeap.value;
  }
} // T:O(LOGN) find media O(1) S:O(N)
