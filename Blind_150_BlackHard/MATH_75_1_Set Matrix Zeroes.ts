// Set Matrix Zeroes
//
// https://leetcode.com/problems/set-matrix-zeroes/description/

// the result should be O(1), no extra memory
// use pas value too update the values
function setZeroes(matrix: number[][]): void {
  let lenJ = matrix.length;
  let lenI = matrix[0].length;

  let ZeroColl = false;
  for (let j = 0; j < lenJ; j++) {
    for (let i = 0; i < lenI; i++) {
      if (matrix[j][i] === 0) {
        if (i === 0) {
          ZeroColl = true;
        } else {
          matrix[0][i] = 0;
        } // cols
        matrix[j][0] = 0; // rows
      }
    }
  } // mark

  for (let j = 1; j < lenJ; j++) {
    for (let i = 1; i < lenI; i++) {
      if (matrix[0][i] == 0 || matrix[j][0] == 0) {
        matrix[j][i] = 0;
      }
    }
  } // update inner matrix

  if (matrix[0][0] == 0) {
    for (let i = 1; i < lenI; i++) {
      matrix[0][i] = 0;
    }
  } // update top row

  if (ZeroColl) {
    for (let j = 0; j < lenJ; j++) {
      matrix[j][0] = 0;
    }
  } // update left col
} // T:O(N^2) S:O(1)
