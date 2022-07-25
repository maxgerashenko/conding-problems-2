// Minimum Subset Sum Difference
//
// https://www.educative.io/courses/grokking-the-coding-interview/mE53y85Wqw9

// Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

function canPartition(
  nums,
  sum = nums.reduce((pre, el) => pre + el, 0),
  dp = [[true]],
  sum1,
  sum2
) {
  let half = Math.round(sum / 2);
  for (let i = 1; i < nums.length; i++) dp[i] = [true]; // 1st col
  for (let h = 1; h < half + 1; h++) dp[0][h] = h === nums[0]; // 1st row
  for (let i = 1; i < nums.length; i++)
    for (let h = 1; h < half + 1; h++)
      dp[i][h] = dp[i - 1][h] || !!dp[i - 1][h - nums[i]];
  for (let h = half; h >= 0; h--) {
    if (dp[nums.length - 1][h]) {
      sum1 = h;
      break;
    }
  }
  sum2 = sum - sum1;
  return Math.abs(sum2 - sum1);
} // T:O(NH) S:(NH) N - nums count H - Nums sum / 2

function canPartitionOptimized(
  nums,
  sum = nums.reduce((pre, el) => pre + el, 0),
  half = Math.round(sum / 2),
  sum1 = half,
  sum2,
  dp = [true]
) {
  for (let h = 1; h < half + 1; h++) dp[h] = h === nums[0]; // 1st row
  for (let i = 1; i < nums.length; i++)
    for (let h = half; h >= 0; h--) dp[h] = dp[h] || !!dp[h - nums[i]]; // 1 row matrix in reverded order
  while (!dp[sum1]) sum1--; // find last true as sum1
  sum2 = sum - sum1;
  return Math.abs(sum2 - sum1); // eval diff
} // T:O(NH) S:(H) N - nums count H - Nums sum / 2
