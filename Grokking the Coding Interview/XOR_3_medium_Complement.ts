// https://www.educative.io/courses/grokking-the-coding-interview/N0yqGR18jND
//
// Complement of Base 10 Number

function calculate_bitwise_complement(n) {
  // number ^ complement = allSet
  // find min max binar number
  // convert it to the full of 1
  // num xor full === complement

  let minBigBinary = 1;
  while (minBigBinary <= n) {
    minBigBinary = minBigBinary << 1; // minFull * 2;
  } // should be > like not 8 for 8

  let allSet = minBigBinary - 1; // 8 === 111 + 1
  return allSet ^ n; // 0 ^ 1 = 1; 1 ^ 1 === 0
} // T:O(N) S:O(1);
