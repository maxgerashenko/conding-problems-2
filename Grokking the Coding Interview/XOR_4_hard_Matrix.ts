// https://www.educative.io/courses/grokking-the-coding-interview/xoExKDNWq8n
//
// Problem Statement (hard)

// reverse the array
// invert the value 0 ^ 1 = 1;

// x^1 inverts 1->0 0->1
function flip_and_invert_image(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < Math.round(matrix.length / 2); j++) {
      let tmp = matrix[i][j] ^ 1;
      matrix[i][j] = matrix[i][matrix.length - 1 - j] ^ 1;
      matrix[i][matrix.length - j - 1] = tmp;
    }
  }
  return matrix;
} // T:O(N/2) S:O(1)
