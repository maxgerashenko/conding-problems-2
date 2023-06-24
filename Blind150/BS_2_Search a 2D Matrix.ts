// https://leetcode.com/problems/search-a-2d-matrix/
// Search a 2D Matrix

function searchMatrix(matrix: number[][], target: number): boolean {
  let jMax = matrix.length;
  let iMax = matrix[0].length;
  let left = 0;
  let right = jMax - 1;
  let row = 0;

  while (left <= right) {
    let pivot = ~~(left + right / 2 - left / 2);

    if (matrix[pivot][0] <= target && target <= matrix[pivot][iMax - 1]) {
      left = pivot;
      break;
    }

    if (matrix[pivot][0] < target) {
      left = pivot + 1;
      continue;
    }
    right = pivot - 1;
  }
  row = left;

  if (row > jMax - 1) return false;
  left = 0;
  right = iMax - 1;
  while (left <= right) {
    let pivot = ~~(left + right / 2 - left / 2);

    if (matrix[row][pivot] === target) return true;

    if (matrix[row][pivot] < target) {
      left = pivot + 1;
      continue;
    }
    right = pivot - 1;
  }

  return false;
} // T:O(logN + logN) S:O(1)
