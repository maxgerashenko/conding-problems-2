// https://www.educative.io/courses/grokking-the-coding-interview/N8MJQNYyJPL
//
// Closest Numbers

const find_closest_elements = function (arr, K, X) {
  // catch error

  // init
  let max = new Heap(true);
  for (let i = 0; i < K; i++) {
    let num = arr.shift();
    max.push({ num, diff: Math.abs(X - num) });
  }

  for (let num of arr) {
    let diff = Math.abs(X - num);
    if (diff >= max.arr[0].diff) continue;
    max.pop();
    max.push({ num, diff });
  }

  return max.arr.map(({ num }) => num);
}; // T:O(KlogK (N-K)logK) S:O(2K)

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax ? (a, b) => b.diff - a.diff : (a, b) => a.diff - b.diff;
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
