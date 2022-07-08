// https://www.educative.io/courses/grokking-the-coding-interview/B6x69OLX4jY
//
// Maximize Capital

class Heap {
  constructor(sort) {
    this.arr = [];
    this.sort = sort;
  }
  push(value) {
    this.arr.push(value);
    this.arr.sort(this.sort);
  }
  pop() {
    return this.arr.shift();
  }
  get len() {
    return this.arr.length;
  }
  get val() {
    return this.arr[0];
  }
}

const find_maximum_capital = function (capital, profits, k, init) {
  let cur = init;
  let min = [];
  let max = new Heap((x, y) => y - x);
  for (; k > 0; k--) {
    for (let i in capital) {
      let cap = capital[i];
      if (cap <= cur) min.push({ cap, index: i });
    } // T:O(N) S:O(N)
    for (let { index } of min) {
      max.push(profits[index]);
    } // T:O(log) S:O(N)
    cur += max.pop(); // T:O(logN) S:O(1)
  }
  return cur;
}; // T:(NlogN + KlogN) S:O(N)
