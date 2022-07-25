// Subset Sum (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/gxrnL0GQGqk

// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

function canPartition(nums, sum, dp = [[true]]) {
  for (let i = 1; i < nums.length; i++) dp[i] = [true]; // 1st col
  for (let s = 1; s < sum + 1; s++) dp[0][s] = s === nums[0]; // 1s row
  for (let i = 1; i < nums.length; i++)
    for (let s = 1; s < sum + 1; s++)
      dp[i][s] = dp[i - 1][s] || dp[i - 1][s - nums[i]]; // include or not include
  return dp;
  return !!dp[nums.length - 1][sum];
} // T:O(NS) S:O(NS) N - count of numbers S - sum

function canPartitionOptimised(nums, sum, dp = [true]) {
  for (let s = 1; s <= sum; s++) dp[s] = nums[0] === s;
  for (let i = 1; i < nums.length; i++)
    for (let s = sum; s >= 0; s--) {
      dp[s] = dp[s] || !!dp[s - nums[i]]; // one row only
    }
  return dp[sum];
} // T:O(NS) S:(S) optimised
