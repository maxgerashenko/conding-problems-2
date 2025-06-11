// Rotate Image
// https://leetcode.com/problems/rotate-image/description/

// Inplace S(1)
// use like a widnow left and right
// while left < right
// for row lenght - 1, as index r - l
// !!! i starts from 0
// start 0,0 as tmp
// then change in reversed order bottom-left = top-left, bottom-right = bottom-left
// this saves memory

function rotate(matrix: number[][]): void {
  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      let top = left;
      let bottom = right;

      let tmp = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = tmp;
    }
    left++;
    right--;
  }
} // T:O(N^2) S:O(1) except orignal matrix
