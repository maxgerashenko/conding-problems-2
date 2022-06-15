// https://www.educative.io/courses/grokking-the-coding-interview/qVZmZJVxPY0
//
// Connect Ropes

const minimum_cost_to_connect_ropes = function (ropeLengths) {
  // catch error
  let min = new Heap();
  let total = 0;
  for (let length of ropeLengths) {
    min.push(length);
  }

  while (min.arr.length > 1) {
    let mins = min.pop() + min.pop();
    total += mins;
    min.push(mins);
  }

  return total;
}; // T:O(NlogN) S:(N)

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax ? (a, b) => b - a : (a, b) => a - b;
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
