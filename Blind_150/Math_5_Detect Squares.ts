// https://leetcode.com/problems/detect-squares/
// Detect Squares

// use math
// to check all combinatins it is T:O(n^3)
//
// check diagonals first
// check that coners exist
// then check x2-x2 === y2-y1
// multiply points for each conner
// return result
// T:O(N) S:O(N)

var DetectSquares = function () {
  this.points = [];
  this.hasMapCount = {};
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  this.points.push(point);
  let key = point[0] + ',' + point[1];
  if (this.hasMapCount[key] == null) {
    this.hasMapCount[key] = 0;
  }
  this.hasMapCount[key] += 1;
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function ([x, y]) {
  let n = this.points.length;
  let res = 0;

  for (let [x2, y2] of this.points) {
    if (
      this.hasMapCount[x2 + ',' + y] == null ||
      this.hasMapCount[x + ',' + y2] == null ||
      Math.abs(x - x2) != Math.abs(y - y2) ||
      x == x2 ||
      y == y2
    )
      continue;

    res += this.hasMapCount[x2 + ',' + y] * this.hasMapCount[x + ',' + y2];
  }
  return res;
}; // T:O(n^3) S:O(n) - brute force
// T:O(n) S:O(n)
