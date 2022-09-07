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
  }
}

class MedianOfAStream {
  constructor() {
    this.minHeap = new Heap((x, y) => x - y);
    this.maxHeap = new Heap((x, y) => y - x);
  }
  insert_num(num) {
    if (this.maxHeap.length === 0) {
      this.maxHeap.push(num);
      return;
    } // conner case;
    if (num > this.maxHeap.arr[0]) {
      this.minHeap.push(num);
    } else {
      this.maxHeap.push(num);
    } // distribute
    if (this.maxHeap.arr.length - this.minHeap.arr.length <= 1) return; // max + 1 >= min
    this.minHeap.push(this.maxHeap.pop());
  }
  find_median(self) {
    return (this.maxHeap.arr[0] + this.minHeap.arr[0]) / 2;
  }
} // T:O(logN) to Add T:O(1) to Get S:O(N)
