// https://leetcode.com/problems/set-matrix-zeroes/
// Set Matrix Zeroes

// store cols and rolls
// mark cols and rols with 0
// return new matrix
//
// T:O(n*m) S:O(Max(n,m))

function setZeroes(matrix: number[][]): void {
  let m = matrix.length;
  let n = matrix[0].length;
  let levels = new Array(m).fill(1);
  let pos = new Array(n).fill(1);

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      levels[j] = levels[j] && matrix[j][i];
      pos[i] = pos[i] && matrix[j][i];
    } // 0 && 1

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      matrix[j][i] = levels[j] && pos[i] && matrix[j][i];
    } // 0 && 0 && 5
} // T:O(NM) S:O(Max NM)
