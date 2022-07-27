// https://www.educative.io/courses/grokking-the-coding-interview/B89rvR6XZ3J
//
// Frequent Numbers

// Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
function find_k_frequent_numbers(
  nums,
  k,
  hasMapCount = {},
  minHeap = new Heap((x, y) => x.count - y.count)
) {
  for (let num of nums) {
    if (hasMapCount[num] == null) hasMapCount[num] = 0;
    hasMapCount[num]++;
  } // hashmap
  for (let i = 0; i < k; i++) {
    let num = nums.shift();
    minHeap.push({ num, count: hasMapCount[num] });
  } // 1st k
  for (let num of Object.keys(hasMapCount)) {
    if (hasMapCount[num] <= minHeap.arr[0].count) continue;
    minHeap.pop();
    minHeap.push({ num, count: hasMapCount[num] });
  } // min of max
  return minHeap.arr.map((el) => el.num);
} // T:O(N+NlogK) S:O(N)
