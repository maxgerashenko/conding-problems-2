// https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G
//
// Kth Smallest Number

const find_Kth_smallest_number = function (nums, k) {
  // catch error
  let max = new Heap(true);
  for (let i = 0; i < k; i++) {
    max.push(nums.shift());
  } // init

  for (let num of nums) {
    if (num >= max.arr[0]) continue;
    max.pop();
    max.push(num);
  } // unpdate max

  return max.arr[0];
}; // T:O(KlogK + (N-K)logK) S:O(K)

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
