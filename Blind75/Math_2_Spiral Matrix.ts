// Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/description/

// use 2D sliding
// cut used edge on every Step
// 4 cut for full surface
// use right and bottom as i < length
// make a full circle with 4 direction

function spiralOrder(matrix: number[][]): number[] {
  let left = 0;
  let top = 0;
  let right = matrix[top].length;
  let bottom = matrix.length;
  let path = [];

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      path.push(matrix[top][left + i]);
    }
    top++;
    if (bottom - top <= 0) break;
    for (let i = 0; i < bottom - top; i++) {
      path.push(matrix[top + i][right - 1]);
    }
    right--;
    if (right - left <= 0) break;
    for (let i = 0; i < right - left; i++) {
      path.push(matrix[bottom - 1][right - 1 - i]);
    }
    bottom--;
    if (bottom - top <= 0) break;
    for (let i = 0; i < bottom - top; i++) {
      path.push(matrix[bottom - 1 - i][left]);
    }
    left++;
  }

  return path;
} // T:O(m*n) S:O(1), exclude matrix
