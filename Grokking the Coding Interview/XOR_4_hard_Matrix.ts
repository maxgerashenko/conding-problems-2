// https://www.educative.io/courses/grokking-the-coding-interview/xoExKDNWq8n
//
// Problem Statement (hard)

// reverse the array
// invert the value 0 ^ 1 = 1;

// x^1 inverts 1->0 0->1
function flip_and_invert_image(matrix, len = matrix.length) {
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < Math.round(len / 2); j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][len - 1 - j] ^ 1;
      matrix[i][len - 1 - j] = tmp ^ 1;
    }
  }
  return matrix;
} // T:O(N) S:O(1)
