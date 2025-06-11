// https://leetcode.com/problems/missing-number/description/
//
// Missing Number

function missingNumber(nums: number[]): number {
  let len = nums.length;
  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum ^= (i + 1) ^ nums[i];
    sum += i + 1 - nums[i];
  }

  return sum;
} // T:(n) S:O(n)
