// Equal Subset Sum Partition (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/g7QYlD8RwRr

function canPartition(
  nums,
  sum = nums.reduce((pre, el) => pre + el, 0),
  half = sum / 2,
  dp = []
) {
  if (sum % 2 !== 0) return false; // conner case
  for (let i = 0; i < nums.length; i++) dp[i] = [true]; // 1st col
  for (let h = 1; h < half + 1; h++) dp[0][h] = h === nums[0]; // 1st row
  for (let i = 1; i < nums.length; i++)
    for (let h = 1; h < half + 1; h++)
      dp[i][h] = dp[i - 1][h] || dp[i - 1][h - nums[i]];
  return dp[nums.length - 1][half];
} // T:O(HN) S:O(HN) H - half of nums sum; N - numbers count
