// https://leetcode.com/problems/sum-of-two-integers/submissions/1121344659/
// Sum of Two Integers

// ned to sum and it is xor 1 and 0 === 1
// but 1 && 1 === 0, exectly x^y
// also need to carry 1 which is 1&&1 but moved to the left << 1
// do both until carray not equal === 0
// need to use tmp to do carry on previous/original step
//
// T:O(1) S:O(1)

function getSum(a: number, b: number): number {
  let sum_carry = (a & b) << 1;
  let sum_xor = a ^ b;
  while (sum_carry) {
    let tmp = (sum_xor & sum_carry) << 1;
    sum_xor = sum_xor ^ sum_carry;
    sum_carry = tmp;
  }

  return sum_xor;
} // T:O(1) S:O(1)
