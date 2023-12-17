// https://leetcode.com/problems/missing-number/submissions/1122122643/
// Missing Number

function missingNumber(nums: number[]): number {
  let res = 0;
  const n = nums.length;

  for (let i = 0; i < n + 1; i++) {
    res ^= Number(i);
  }

  for (let el of nums) {
    res ^= el;
  }

  return res;
} // T:O(n)S:O(1)
