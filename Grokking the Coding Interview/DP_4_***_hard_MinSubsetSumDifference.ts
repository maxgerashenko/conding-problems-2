// Minimum Subset Sum Difference
//
// https://www.educative.io/courses/grokking-the-coding-interview/mE53y85Wqw9

// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

let canPartitionOptimized = function (
  nums,
  dp = [1],
  sum = nums.reduce((pre, el) => pre + el, 0),
  half = Math.floor(sum / 2)
) {
  for (let s = half; s > 0; s--) dp[s] = s === nums[0] ? 1 : 0; // init 1st row
  for (let i = 1; i < nums.length; i++)
    for (let s = half; s > 0; s--) {
      dp[s] |= s - nums[i] > 0 ? dp[s - nums[i]] : 0;
      if (i === nums.length - 1 && dp[s]) {
        return Math.abs(sum - 2 * s);
      }
    }
  return -1;
}; // T:O(NS) S:O(S) S - is half
