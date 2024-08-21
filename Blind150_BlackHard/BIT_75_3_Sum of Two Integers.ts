// https://leetcode.com/problems/sum-of-two-integers/description/
//
// Sum of Two Integers

function getSum(a: number, b: number): number {
  let sum = a ^ b; // XOR is sum without carry
  let carry = (a & b) << 1; // AND is a carry only
  while (carry !== 0) {
    let a = sum ^ carry;
    let b = (sum & carry) << 1;
    sum = a;
    carry = b;
  } // iterate until carry vanishes

  return sum;
} // T:O(1) S:O(1)
