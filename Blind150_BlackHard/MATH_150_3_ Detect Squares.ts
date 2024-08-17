// Detect Squares
//
// https://leetcode.com/problems/detect-squares/description/

// check diagonal first
// use point map count
// combination = product of points counts
class DetectSquares {
  pointsMapCount;

  constructor() {
    this.pointsMapCount = {};
  }

  getKey = (x, y) => `${x},${y}`;

  add([x, y]: Number[]): void {
    let key = this.getKey(x, y);

    if (this.pointsMapCount[key] == null) {
      this.pointsMapCount[key] = 0;
    }
    this.pointsMapCount[key]++;
  }

  isDiagonal = (x1, y1, x2, y2) =>
    Math.abs(x1 - x2) > 0 && Math.abs(x1 - x2) === Math.abs(y1 - y2);

  count(point): number {
    let [x0, y0] = point;
    let count = 0;

    for (let key of Object.keys(this.pointsMapCount)) {
      let [x1, y1] = key.split(',');
      if (!this.isDiagonal(x0, y0, x1, y1)) continue;

      count +=
        (this.pointsMapCount[this.getKey(x1, y1)] ?? 0) *
        (this.pointsMapCount[this.getKey(x0, y1)] ?? 0) *
        (this.pointsMapCount[this.getKey(x1, y0)] ?? 0);
    }

    return count;
  }
} // T:O(N) S:O(N)
