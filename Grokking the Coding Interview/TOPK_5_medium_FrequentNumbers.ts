// https://www.educative.io/courses/grokking-the-coding-interview/B89rvR6XZ3J
//
// Frequent Numbers

const find_k_frequent_numbers = function (nums, k) {
  // catch error
  let map = {};
  for (let num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }
  let distinct = Object.keys(map);
  let min = new Heap();
  for (let i = 0; i < k; i++) {
    min.push(distinct.shift());
  }

  for (let num of distinct) {
    if (map[num] <= min.arr[0].count) continue;
    min.pop();
    min.push({ val: num, count: map[num] });
  }

  return min.arr.map(({ val }) => val);
}; // T:O(KlogK + (N-K)logK) S:O(N)

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax
      ? (a, b) => b.count - a.count
      : (a, b) => a.count - b.count;
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
