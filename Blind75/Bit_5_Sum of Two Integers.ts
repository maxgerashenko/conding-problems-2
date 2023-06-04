// Sum of Two Integers
// https://leetcode.com/problems/sum-of-two-integers/

function getSum(sum: number, b: number): number {
  while (b != 0) {
    let carry = (sum & b) << 1; // if need to carray val to the left
    sum ^= b; // actual sum 0 ^ 1 || 1 ^ 0
    b = carry;
  }
  return sum;
} // T:O(1) or n S:O(1)
