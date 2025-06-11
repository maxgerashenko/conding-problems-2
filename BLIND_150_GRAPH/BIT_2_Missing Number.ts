// https://leetcode.com/problems/missing-number/description/
//
// Missing Number

function missingNumber(nums: number[]): number {
  let len = nums.length;
  let xor = 0;

  for (let i = 0; i < len; i++) {
    xor ^= (i + 1) ^ nums[i];
  }

  return xor;
} // T:O(1) S:O(1)

const missingNumber(nums: number[]) => nums.reduce((xor, el, index) => xor ^ (index + 1) ^ el, 0)// T:O(1) S:O(1)
