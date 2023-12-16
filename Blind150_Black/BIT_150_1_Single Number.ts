// https://leetcode.com/problems/single-number/
// Single Number

// ^ XOR makes simial 1&&1 to 0

function singleNumber(nums: number[]): number {
  let res = 0;
  for (let el of nums) {
    res ^= el;
  }
  return res;
} // T:O(N) S:O(1)
