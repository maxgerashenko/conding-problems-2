// https://www.educative.io/courses/grokking-the-coding-interview/3YxNVYwNR5p
//
// Closest Points to the Origin

class Heap {
  constructor(sort) {
    this.sort = sort;
    this.arr = [];
    this.push = (el) =>
      (this.arr = [...this.arr, el].sort((a, b) => this.sort(a, b)));
    this.pop = () => this.arr.shift();
  }
}
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  get_point() {
    return '[' + this.x + ', ' + this.y + '] ';
  }
  get dist() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
const find_closest_points = function (
  points,
  k,
  results = [],
  maxHeap = new Heap((x, y) => y.dist - x.dist)
) {
  for (let i = 0; i < k; i++) maxHeap.push(points.shift());
  for (let point of points) {
    if (point.dist >= maxHeap.arr[0].dist) continue;
    maxHeap.pop();
    maxHeap.push(point);
  }
  return maxHeap.arr;
}; // T:(NlogK) S:O(K)
