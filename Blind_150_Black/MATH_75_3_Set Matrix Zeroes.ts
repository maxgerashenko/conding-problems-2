// https://leetcode.com/problems/set-matrix-zeroes/
// Set Matrix Zeroes

// store cols and rolls
// mark cols and rols with 0
// return new matrix
//
// T:O(n*m) S:O(Max(n,m))

// https://leetcode.com/problems/set-matrix-zeroes/
// Set Matrix Zeroes

// store cols and rols
// mark cols and rols with 0
// use first row and cols
// use extra var for first row
// to not overlap first of row and col
// reverse setting as don't want to orverid 1rst values
// befor all other are set
//
// T:O(n*m) S:O(1)

function setZeroes(matrix: number[][]): void {
  let m = matrix.length;
  let n = matrix[0].length;
  let firstRow = 1; // overlap

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      if (j == 0) {
        firstRow = firstRow && matrix[0][i];
        continue;
      }
      matrix[j][0] = matrix[j][i] && matrix[j][0];
      matrix[0][i] = matrix[j][i] && matrix[0][i];
    } // 0 && 1

  for (let j = m - 1; j >= 0; j--)
    for (let i = n - 1; i >= 0; i--) {
      if (j == 0) {
        matrix[j][i] = firstRow && matrix[0][i];
        continue;
      }
      matrix[j][i] = matrix[j][0] && matrix[0][i] && matrix[j][i];
    } // 0 && 0 && 5
} // T:O(NM) S:O(1)
