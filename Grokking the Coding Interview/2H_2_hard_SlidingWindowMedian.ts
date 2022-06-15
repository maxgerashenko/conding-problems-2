// https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO
//
// Sliding Window Median

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

class SlidingWindowMedian {
  constructor() {
    this.max = new Heap(true);
    this.min = new Heap();
  }

  rebalance() {
    if (this.max.length() > this.min.length() + 1) {
      this.min.push(this.max.pop());
    }
    if (this.max.length() < this.min.length()) {
      this.max.push(this.min.pop());
    }
  }

  add(value) {
    if (this.max.length() === 0 || value <= this.max.value()) {
      this.max.push(value);
    } else {
      this.min.push(value);
    }

    this.rebalance();
  }

  delete(value) {
    if (value <= this.max.value()) {
      this.max.delete(value);
    } else {
      this.min.delete(value);
    }
  }

  median() {
    return this.max.length() > this.min.length()
      ? this.max.value()
      : (this.max.value() + this.min.value()) / 2;
  }

  find_sliding_window_median(nums, k) {
    // init
    result = [];
    for (let i = 0; i < k; i++) {
      this.add(nums[i]);
    }
    result.push(this.median());

    // use sliding window
    for (let i = k; i < nums.length; i++) {
      this.delete(nums[i - k]);
      this.add(nums[i]);
      result.push(this.median());
    }

    return result;
  }
} // T:O(N*K) S:O(K)
// T:O(K) - delete K-sliding window
// T:O(log K) - add/insert N
// N - iterate all array
