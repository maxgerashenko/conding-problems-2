// https://www.educative.io/courses/grokking-the-coding-interview/3Yj2BmpyEy4
//
// Find the Median of a Number Stream

// Design a class to calculate the median of a number stream

class MedianOfAStream {
  constructor() {
    this.min = new Heap((x, y) => x - y);
    this.max = new Heap((x, y) => y - x);
  }

  insert_num(num) {
    if (this.max.len === 0) {
      this.max.push(num);
      return;
    }
    num <= this.max.val ? this.max.push(num) : this.min.push(num);
    this.rebalance();
    console.log(this.max.arr, this.min.arr);
  }

  rebalance() {
    if (this.max.len == this.min.len) return;
    if (this.max.len > this.min.len + 1) {
      this.min.push(this.max.pop());
      return;
    }
    this.max.push(this.min.pop());
  }

  find_median(self) {
    if (this.max.len === this.min.len + 1) return this.max.val;
    return (this.max.val + this.min.val) / 2;
  }
} // T:O(logN) S:O(N)
