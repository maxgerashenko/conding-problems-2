// Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/description/

// Need to define values for rows and cols
// only then set, otherwice will be all zero's all the time
// Can be solved with S:O(m*n) with dublicate matrix
// Can be solved with S:O(m+n) with 2 array for row and cols
// Solved with S:O(1 + 1) change in place + 1 cell for 0,0 to avoind intersection
// horizontal j=0 for cols values
// vertical i=0 for horizontal values

function setZeroes(matrix: number[][]): void {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let topLeft = 1;

  for (let j = 0; j < rows; j++)
    for (let i = 0; i < cols; i++) {
      if (matrix[j][i] !== 0) continue;
      if (j == 0 && i == 0) {
        topLeft = 0; // cols
        matrix[0][0]; // rows
        continue;
      }
      if (i == 0) {
        matrix[0][0] = 0; // cols
        continue;
      }
      if (j == 0) {
        topLeft = 0; // rows
        continue;
      }
      matrix[j][0] = 0;
      matrix[0][i] = 0;
    }

  for (let j = rows - 1; j >= 0; j--)
    for (let i = cols - 1; i >= 0; i--) {
      if (j === 0) {
        if (topLeft === 0) {
          matrix[j][i] = 0;
        }
        continue;
      }
      if (matrix[j][0] === 0 || matrix[0][i] === 0) {
        matrix[j][i] = 0;
      }
    }
} // T:O(2(m*n)) S:O(1 + 1) ignoring matrix space, use in place
