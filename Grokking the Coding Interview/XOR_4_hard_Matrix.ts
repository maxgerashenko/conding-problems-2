// https://www.educative.io/courses/grokking-the-coding-interview/xoExKDNWq8n
//
// Problem Statement (hard)

// 1 ^ 1 === 0; 0 ^ 1 === 1;
function flip_and_invert_image(matrix) {
  for(let i in matrix){
    let len = matrix.length;
    let half = Math.round(len/2);
    for(let j=0;j<half; j++) {
      let last = len - 1 - j;
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][last] ^ 1
      matrix[i][last] = tmp ^ 1
    }
  }
  return matrix;
} // T:O(N) S:O(1)