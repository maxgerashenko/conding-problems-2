// Brut force in n^3
// reuse existing matrix
// for [0][0] elemetn use tmp
// run 2 times
// run to mark
// run to update
// mark in positive order
// udpate rows and cols in reversed order
function setZeroes(matrix: number[][]): void {
  let firstColl = 1;
  let m = matrix.length;
  let n = matrix[0].length;

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      if (matrix[j][i] !== 0) continue;
      matrix[j][0] = 0; // for rows;
      if (i === 0) {
        firstColl = 0;
        continue;
      }
      matrix[0][i] = 0; // for cols
    }

  for (let j = m - 1; j >= 0; j--)
    for (let i = n - 1; i >= 0; i--) {
      if (
        (i !== 0 && matrix[0][i] == 0) ||
        (i == 0 && firstColl == 0) ||
        matrix[j][0] == 0
      ) {
        matrix[j][i] = 0;
      }
    }
} // T:O(n^3) -> T:O(m*n) S:O(1)
