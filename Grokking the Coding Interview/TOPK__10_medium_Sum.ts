// https://www.educative.io/courses/grokking-the-coding-interview/qVljv3Plr67
//
// Sum of Elements

const find_sum_of_elements = function (nums, k1, k2) {
  // catch error
  if (k2 - 1 <= 1) return 0; // conner case

  let maxK2 = getMaxHeapK(nums, k2);
  return maxK2.arr.slice(0, k2 - k1 - 1).reduce((sum, cur) => sum + cur, 0); // [)
};

function getMaxHeapK(arr, k) {
  let max = new Heap((a, b) => b - a);
  while (arr.length > 0) {
    let num = arr.pop();
    max.push(num);
    if (max.arr.length === k) max.pop();
  }
  return max;
} // T:O(K2logK + K2-K1-1) S:(K2)

class Heap {
  constructor(sort) {
    this.arr = [];
    this.sort = sort;
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
