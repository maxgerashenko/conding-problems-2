// https://www.educative.io/courses/grokking-the-coding-interview/N0yqGR18jND
//
// Complement of Base 10 Number

function calculate_bitwise_complement(num) {
  let count = 0
  let x = num;
  while(x > 0){
    count++;
    x >>= 1; // remove bits
  }
  let full = Math.pow(2, count) - 1; // 111 = 2^4 - 1
  return num ^ full // negative of num;
} // T:O(N) S:(1)
