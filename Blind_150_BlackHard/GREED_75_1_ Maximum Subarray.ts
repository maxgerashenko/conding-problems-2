// Maximum Subarray
//
// https://leetcode.com/problems/maximum-subarray/description/

function maxSubArray(nums: number[]): number {
  let sum = 0;
  let max = nums[0];

  for (let el of nums) {
    if (sum < 0) {
      sum = 0;
    }
    sum += el;
    max = Math.max(max, sum);
  }

  return max;
} // T:O(n) S:O(1)
