// https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO
//
// Sliding Window Median

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

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

class SlidingWindowMedian {
  constructor() {
    this.maxHeap = new Heap((x, y) => y - x);
    this.minHeap = new Heap((x, y) => x - y);
    this.results = [];
  }
  add(num) {
    !this.maxHeap.length || num <= this.maxHeap.value
      ? this.maxHeap.push(num)
      : this.minHeap.push(num);
    this.rebalance();
  }
  remove(num) {
    const heap = num <= this.maxHeap.value ? this.maxHeap : this.minHeap;
    heap.remove(num);
    this.rebalance();
  }
  rebalance() {
    if (this.maxHeap.length > this.minHeap.length + 1)
      this.minHeap.push(this.maxHeap.pop);
    if (this.maxHeap.length < this.minHeap.length)
      this.maxHeap.push(this.minHeap.pop());
  }
  getMedian() {
    return this.maxHeap.length === this.minHeap.length
      ? this.maxHeap.value / 2 + this.minHeap.value / 2
      : this.maxHeap.value;
  }

  find_sliding_window_median(nums, k) {
    for (let i = 0; i < k; i++) this.add(nums[i]); // init heap
    this.results.push(this.getMedian()); // add first value
    for (let i = k; i < nums.length; i++) {
      this.add(nums[i]);
      this.remove(nums[i - k]);
      this.results.push(this.getMedian());
    }
    return this.results;
  }
} // T:O(N*K) insert logK removing K S:O(K)
