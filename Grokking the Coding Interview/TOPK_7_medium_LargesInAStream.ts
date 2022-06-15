// https://www.educative.io/courses/grokking-the-coding-interview/B819G5DZBxX
//
// Largest Number in a Stream

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.min = new Heap();
    for (let i = 0; i < k; i++) {
      this.min.push(nums.shift());
    }

    for (let num of nums) {
      if (num <= this.min.arr[0]) continue;
      this.min.pop();
      this.min.push(num);
    }
  }

  add(num) {
    if (num <= this.min.arr[0]) return this.min.arr[0];
    this.min.pop();
    this.min.push(num);
    return this.min.arr[0];
  }
} // T:O(KlogK + (N-K)logK) S:O(K)

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax ? (a, b) => b - a : (a, b) => a - b;
  }
  push(el) {
    this.arr.push(el);
    this.arr.sort(this.sort);
  }
  pop() {
    let tmp = this.arr.shift();
    this.arr.sort(this.sort);
    return tmp;
  }
}
