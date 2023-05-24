// Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// DP 0
// 2 negative values could not be more that 1 negative
// reset when cur > sum
// like a window but left border couldbe reset

function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return null;
  let curSum = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let el = nums[i];
    curSum += el;
    if (curSum < 0 || nums[i] > curSum) {
      curSum = nums[i];
    }

    max = Math.max(max, curSum);
  }
  return max;
} // T:O(N) S:O(1)
