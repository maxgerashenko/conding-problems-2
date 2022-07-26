// https://www.educative.io/courses/grokking-the-coding-interview/gxxPGn8vE8G
//
// Kth Smallest Number

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
function find_Kth_smallest_number(
  nums,
  k,
  maxHeap = new Heap((x, y) => y - x)
) {
  for (let i = 0; i < k; i++) maxHeap.push(nums.shift());
  for (let num of nums) {
    if (num >= maxHeap.arr[0]) continue;
    maxHeap.push(num);
    maxHeap.pop();
  }
  return maxHeap.arr[0];
} // T:O(NLogK) S:O(K)
