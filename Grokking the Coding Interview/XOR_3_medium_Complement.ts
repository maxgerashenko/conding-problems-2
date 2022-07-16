// https://www.educative.io/courses/grokking-the-coding-interview/N0yqGR18jND
//
// Complement of Base 10 Number

function calculate_bitwise_complement(n) {
  return parseInt(
    n
      .toString(2)
      .split('')
      .map((num) => num ^ 1)
      .join(''),
    2
  );
} // T:O(b) S:O(1) b - bits
