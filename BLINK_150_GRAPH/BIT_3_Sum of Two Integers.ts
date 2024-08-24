// https://leetcode.com/problems/sum-of-two-integers/description/
//
// Sum of Two Integers

// xor is sum
// & << 1 is carry
function getSum(num1: number, num2: number): number {
  let sum = num1 ^ num2;
  let carry = (num1 & num2) << 1;
  while (carry !== 0) {
    let tmp = sum;
    sum = sum ^ carry;
    carry = (tmp & carry) << 1;
  }

  return sum;
} // T:O(1) S:O(1)
