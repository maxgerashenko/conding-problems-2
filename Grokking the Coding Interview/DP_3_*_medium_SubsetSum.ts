// Subset Sum (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/gxrnL0GQGqk

// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

const canPartitionOptimized = function (nums, sum, dp = [1]) {
  for (let s = sum; s > 0; s--) dp[s] = s === nums[0]; // init 1st row
  for (let i = 1; i < nums.length; i++)
    for (let s = sum; s > 0; s--)
      dp[s] |= s - nums[i] > 0 ? dp[s - nums[i]] : 0;
  return !!dp[sum];
}; // T:O(NS) S:O(S)
