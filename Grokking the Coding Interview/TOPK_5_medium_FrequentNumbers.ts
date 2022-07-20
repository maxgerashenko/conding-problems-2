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
const find_k_frequent_numbers = function (
  nums,
  k,
  results = [],
  hashMapCount = {},
  minHeap = new Heap((x, y) => x.count - y.count)
) {
  for (let num of nums) {
    hashMapCount[num] = hashMapCount[num] == null ? 1 : hashMapCount[num] + 1;
  }
  let keys = Object.keys(hashMapCount);
  for (let i = 0; i < k; i++) {
    let num = keys.shift();
    minHeap.push({ num, count: hashMapCount[num] });
  }
  for (let num of keys) {
    if (minHeap.arr[0].count >= hashMapCount[num]) continue;
    minHeap.pop();
    minHeap.push({ num, count: hashMapCount[num] });
  }
  return minHeap.arr.map((el) => el.num);
}; // T:O(N + N*LogK) S:O(N)
