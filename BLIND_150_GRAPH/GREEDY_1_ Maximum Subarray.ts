// https://leetcode.com/problems/maximum-subarray/description/
//
// Maximum Subarray

// sum < 0 || left < 0
function maxSubArray(nums: number[]): number {
  let l = 0;
  let sum = 0;
  const len = nums.length;
  let max = -Infinity;

  for (let r = 0; r < len; r++) {
    sum += nums[r];
    while ((sum <= 0 || nums[l] <= 0) && l < r) {
      sum -= nums[l];
      l++;
    }
    max = Math.max(max, sum);
  }

  return max;
} // T:O(n) S:O(1)

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
