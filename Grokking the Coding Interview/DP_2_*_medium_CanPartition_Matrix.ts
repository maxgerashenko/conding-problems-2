// Equal Subset Sum Partition (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/g7QYlD8RwRr

const canPartitionOptimized = function (
  nums,
  sum = nums.reduce((pre, el) => pre + el, 0),
  dp = [1],
  half = sum / 2
) {
  if (sum % 2 !== 0) return false; // conner case
  for (let s = 1; s < half + 1; s++) dp[s] = s === nums[0] ? 1 : 0; // init row
  for (let i = 1; i < nums.length; i++)
    for (let s = sum; s > 0; s--)
      dp[s] |= s - nums[i] > 0 ? dp[s - nums[i]] : 0;
  return !!dp[sum];
}; // T:O(SN) S:O(S)
