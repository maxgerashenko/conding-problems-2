// Minimum Subset Sum Difference
//
// https://www.educative.io/courses/grokking-the-coding-interview/mE53y85Wqw9

// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

let canPartition = function (
  nums,
  sum = nums.reduce((pre, el) => pre + el, 0),
  half = Math.round(sum / 2),
  dp = [true],
  minDiff = Infinity
) {
  for (let h = 1; h < half + 1; h++) dp[h] = h === nums[0]; // 1st row
  for (let i = 1; i < nums.length; i++)
    for (let h = half; h > 0; h--) {
      dp[h] = dp[h] || (h > nums[i] && dp[h - nums[i]]);
      if (dp[h]) minDiff = Math.min(minDiff, Math.abs(h - (sum - h)));
    }
  return minDiff;
}; // T:O(NH) S:O(H) N - nums count H half of sum
