// https://www.educative.io/courses/grokking-the-coding-interview/RM535yM9DW0
//
// Top 'K' Numbers

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const find_k_largest_numbers = function (
  nums,
  k,
  result = [],
  minHeap = new Heap((a, b) => a - b)
) {
  for (let i = 0; i < k; i++) minHeap.push(nums[i]);
  for (i = k; i < nums.length; i++) {
    if (nums[i] <= minHeap.arr[0]) continue;
    minHeap.pop();
    minHeap.push(nums[i]);
  }
  return [...minHeap.arr];
}; // T:O(NLogK) S:(K) is better that sort T:(NlogN) S:O(N)
