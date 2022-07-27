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
  maxHeap = new Heap((x, y) => y - x)
) {
  for (let i = 0; i < k2; i++) maxHeap.push(nums.shift()); // init maxHeap
  for (let num of nums) {
    if (num >= maxHeap.arr[0]) continue;
    maxHeap.push(num);
    maxHeap.pop();
  } // get k min el
  maxHeap.pop(); // (k1, k2) on included 3,6 = 4,5 i=0;i<(6-3)-1;i++; i<3-1 == 2 times
  let sum = 0;
  for (let i = 0; i < k2 - k1 - 1; i++) sum += maxHeap.pop();
  return sum;
}; // T:O(NlgoK) S:O(K)
