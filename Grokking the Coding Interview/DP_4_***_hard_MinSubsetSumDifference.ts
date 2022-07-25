// Minimum Subset Sum Difference
//
// https://www.educative.io/courses/grokking-the-coding-interview/mE53y85Wqw9

// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

let canPartition = function (
  nums,
  sum = nums.reduce((pre, el) => pre + el, 0),
  half = Math.floor(sum / 2),
  dp = [],
  sum1 = 0,
  sum2 = 0
) {
  for (let i = 0; i < nums.length; i++) dp[i] = [true]; // 1s col
  for (let h = 1; h < half + 1; h++) dp[0][h] = h === nums[0]; // 1st row
  for (let i = 1; i < nums.length; i++)
    for (let h = 1; h < half + 1; h++)
      dp[i][h] = dp[i - 1][h] || dp[i - 1][h - nums[i]];

  for (let h = half; h >= 0; h--) {
    if (dp[nums.length - 1][h]) {
      sum1 = h;
      break;
    }
  }
  sum2 = sum - sum1;
  return Math.abs(sum2 - sum1);
}; // T:O(N*H) S:(N*H) N - numbers H-half
