// https://www.educative.io/courses/grokking-the-coding-interview/qVljv3Plr67
//
// Sum of Elements
// & get a range form the heap (1-4) both not icluded = arr.pop() for i=0<4-2-1;i++

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
const find_sum_of_elements = function (
  nums,
  k1,
  k2,
  sum = 0,
  maxHeap = new Heap((x, y) => y - x)
) {
  let end = Math.min(k2, nums.length);
  if (end < k1 + 1) return 0;
  for (let i = 0; i < k2 - 1; i++) maxHeap.push(nums[i]); // init min of MaxHeap // KlogK
  for (let i = k2 - 1; i < nums.length; i++) {
    if (nums[i] >= maxHeap.arr[0]) continue;
    maxHeap.pop();
    maxHeap.push(nums[i]);
  } // NlogK
  for (let i = 0; i < k2 - k1 - 1; i++) sum += maxHeap.pop(); // KlogK
  return sum;
}; // T:(NlogK2) S:O(K2)
