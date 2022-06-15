function flip_and_invert_image(matrix) {
  // 1 ^ 1 === 0; 0 ^ 1 === 1;
  // reverse half is (length + 1) / 2;
  let length = matrix.length;
  for (let row in matrix) {
    for (let c = 0; c < Math.floor((length + 1) / 2); c++) {
      let tmp = matrix[row][c];
      matrix[row][c] = matrix[row][length - 1 - c] ^ 1;
      matrix[row][length - 1 - c] = tmp ^ 1;
    }
  }

  return matrix;
} // T:O(N) S:O(1)
