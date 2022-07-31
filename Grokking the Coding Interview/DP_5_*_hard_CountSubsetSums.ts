// https://www.educative.io/courses/grokking-the-coding-interview/qZgJyPqwJ80
//
// Count of Subset Sum (hard)

const countSubsets = function (nums, sum, dp = [1]) {
  for (let s = sum; s > 0; s--) dp[s] = s === nums[0] ? 1 : 0;
  for (let n = 1; n < nums.length; n++)
    for (let s = sum; s > 0; s--)
      dp[s] += s - nums[n] >= 0 ? dp[s - nums[n]] : 0;
  return dp[sum];
}; // T:O(NS) S:O(S) S - sum N - nums count
