// https://www.educative.io/courses/grokking-the-coding-interview/qZgJyPqwJ80
//
// Count of Subset Sum (hard)

const countSubsets = function (nums, sum, dp = [1]) {
  for (let s = 1; s < sum + 1; s++) dp[s] = s === nums[0] ? 1 : 0; // init 1st row
  for (let i = 1; i < nums.length; i++)
    for (let s = sum; s > 0; s--)
      dp[s] = dp[s] + (s - nums[i] > 0 ? dp[s - nums[i]] : 0);
  return dp[sum];
}; // T:O(NS) S:O(S)
