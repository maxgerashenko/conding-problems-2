// https://www.educative.io/courses/grokking-the-coding-interview/3Y9jm7XRrXO
//
// Sliding Window Median

// Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

class Heap {
  constructor(sort) {
    this.arr = [];
    this.sort = sort;
  }
  push(value) {
    this.arr.push(value);
    this.arr.sort(this.sort);
  }
  pop() {
    return this.arr.shift();
  }
  get len() {
    return this.arr.length;
  }
  get val() {
    return this.arr[0];
  }
}

class TwoHeaps {
  constructor() {
    this.min = new Heap((x, y) => x - y);
    this.max = new Heap((x, y) => y - x);
  }
  push(val) {
    if (this.max.len == 0 || val <= this.max.val) {
      this.max.push(val);
      this.balance();
      return;
    }
    this.min.push(val);
    this.balance();
  }
  balance() {
    if (this.max.len === this.min.len || this.max.len === this.min.len + 1)
      return;
    if (this.max.len > this.min.len + 1) {
      this.min.push(this.max.pop());
      return;
    }
    this.max.push(this.min.pop());
  }
  get median() {
    return this.max.len === this.min.len
      ? this.max.val / 2 + this.min.val / 2
      : this.max.val;
  }
  remove(val) {
    if (val <= this.max.val) {
      this.max.arr = this.max.arr.filter((el) => el !== val);
      this.balance();
      return;
    }
    this.min.arr = this.min.arr.filter((el) => el !== val);
    this.balance();
  }
}

class SlidingWindowMedian {
  constructor() {
    this.twoHeaps = new TwoHeaps();
  }
  find_sliding_window_median(nums, k) {
    let result = [];
    for (let i = 0; i < k; i++) this.twoHeaps.push(nums[i]);
    result.push(this.twoHeaps.median);
    for (let i = k; i < nums.length; i++) {
      this.twoHeaps.push(nums[i]);
      this.twoHeaps.remove(nums[i - k]);
      result.push(this.twoHeaps.median);
    }
    return result;
  }
} // T:O(N*K) S:(K) remove is K inser is logK
