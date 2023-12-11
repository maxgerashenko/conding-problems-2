// https://leetcode.com/problems/detect-squares/
// Detect Squares

// use diagonals
// track hashMapCount
// notice on use ontly 3 dots form array
// Check diagonals and ignore other dots
// untill diagonal matchs
// count diagonals and one more dote
//
// T:O(N^2) S:O(N)

class DetectSquares {
  hashMap = {};
  constructor() {}

  add([x, y]: number[]): void {
    let key = `${x},${y}`;
    if (this.hashMap[key] == null) {
      this.hashMap[key] = 1;
      return null;
    }
    this.hashMap[key]++;
  }

  count([x, y]: number[]): number {
    let count = 0;

    for (let key of Object.keys(this.hashMap)) {
      let [px, py] = key.split(',').map((el) => Number(el));

      if (Math.abs(x - px) !== Math.abs(y - py) || x == px || y == py) continue; // not diagonal

      count +=
        (this.hashMap[`${x},${py}`] || 0) *
        (this.hashMap[`${px},${y}`] || 0) *
        this.hashMap[key];
    }
    return count;
  }
} // T:O(N^2) S:O(N^2), not n^3 scan diagnal and 2 dot's
