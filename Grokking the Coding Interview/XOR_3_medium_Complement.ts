// https://www.educative.io/courses/grokking-the-coding-interview/N0yqGR18jND
//
// Complement of Base 10 Number

const calculate_bitwise_complement = (n) =>
  parseInt(
    n
      .toString(2)
      .split('')
      .map((el) => el ^ 1)
      .join(''),
    2
  ); // T:O(N.length) S:O(1)
