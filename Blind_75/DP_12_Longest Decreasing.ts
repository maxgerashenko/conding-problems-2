// Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/description/

// Tricky
// Need to check everything anyway
// worse case is n^3
// dp is n^2
// compaire every element with pre solution when n1 < n2
// return the biggest solutions

function lengthOfLIS(nums: number[]): number {
  // all combinations of included or not included
  let len = nums.length; // for all nums
  let dp = new Array(len).fill(1);

  for (let i = len - 1; i >= 0; i--)
    for (let j = i + 1; j < len; j++) {
      if (nums[i] >= nums[j]) continue;
      dp[i] = Math.max(dp[i], 1 + dp[j]);
    }
  return Math.max(...dp);
} // T:O(n^2) S:O(n)
