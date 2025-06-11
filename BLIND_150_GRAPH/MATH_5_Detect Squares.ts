// https://leetcode.com/problems/detect-squares/description/
//
// Detect Squares

// is square by diagonal
// and not duplicate
// then check 2 rest points
class DetectSquares {
  pointsMapCount = {};

  constructor() {}

  getKey = (x, y) => `${x},${y}`;

  add([x, y]: number[]): void {
    let key = this.getKey(x, y);
    if (this.pointsMapCount[key] == null) {
      this.pointsMapCount[key] = 0;
    }
    this.pointsMapCount[key]++;
  }

  hasDiagonal = (x: number, y: number, xD: number, yD: number) =>
    Math.abs(x - xD) === Math.abs(y - yD);

  hasSquare = (x: number, y: number, xD: number, yD: number) =>
    this.pointsMapCount[this.getKey(x, yD)] != null &&
    this.pointsMapCount[this.getKey(xD, y)] != null;

  count([x, y]: number[]): number {
    let count = 0;
    for (let diagonalKey of Object.keys(this.pointsMapCount)) {
      let [xD, yD] = diagonalKey.split(',').map((str) => Number(str)); // nubmers

      if (
        !this.hasDiagonal(x, y, xD, yD) ||
        x === xD ||
        y === yD ||
        !this.hasSquare(x, y, xD, yD) // is not a duplicate
      )
        continue;

      count +=
        this.pointsMapCount[this.getKey(xD, yD)] *
        this.pointsMapCount[this.getKey(x, yD)] *
        this.pointsMapCount[this.getKey(xD, y)];
    }

    return count;
  }
} // T:O(N) S:O(N)
