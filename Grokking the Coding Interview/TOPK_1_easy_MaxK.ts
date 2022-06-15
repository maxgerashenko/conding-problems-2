// https://www.educative.io/courses/grokking-the-coding-interview/RM535yM9DW0
//
// Top 'K' Numbers

const find_k_largest_numbers = function (nums, k) {
  let min = new Heap(); // init
  for (let i = 0; i < k; i++) {
    min.push(nums.shift());
  }

  for (let num of nums) {
    if (num <= min.arr[0]) continue;
    min.pop();
    min.push(num);
  } // replace smallest

  return min.arr;
}; // T:(NlogK) S:O(K)

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = this.isMax ? (a, b) => b - a : (a, b) => a - b;
  }
  push(el) {
    this.arr.push(el);
    this.arr.sort((a, b) => this.sort(a, b));
  }
  pop() {
    let tmp = this.arr.shift();
    this.arr.sort((a, b) => this.sort(a, b));
    return tmp;
  }
} // sort T:(NlogN) S:O(N)
// T:O(KlogK + (N-K)logK) S:O(K)
