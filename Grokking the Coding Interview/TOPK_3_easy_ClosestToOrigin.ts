// https://www.educative.io/courses/grokking-the-coding-interview/3YxNVYwNR5p
//
// Closest Points to the Origin

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.val = Math.sqrt(x * x + y * y);
  }

  get_point() {
    return '[' + this.x + ', ' + this.y + '] ';
  }
}

const find_closest_points = function (points, k) {
  // catch error
  let max = new Heap(true);
  for (let i = 0; i < k; i++) {
    max.push(points.shift());
  }

  for (let point of points) {
    if (point.val >= max.arr[0]) continue;
    max.pop();
    max.push(point);
  }

  return max.arr;
}; // T:O(KlogK + (N-K)logK) S:O(K)

class Heap {
  constructor(isMax = false) {
    this.arr = [];
    this.sort = isMax ? (a, b) => b.val - a.val : (a, b) => a.val - b.val;
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
