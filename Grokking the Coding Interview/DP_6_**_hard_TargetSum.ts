// https://www.educative.io/courses/grokking-the-coding-interview/qZWW7Ny0Dk3#Target-Sum-(hard)
//
// Target Sum (hard)

// S1 + S2 = Total
// S1 - S2 = S
// 2 S1 = Total + S
// S1 = (Total + S) / 2
const findTargetSubsets = function (
  nums,
  target,
  totalSum = nums.reduce((pre, el) => pre + el, 0, (dp = [1]))
) {
  if ((totalSum + target) % 2 !== 0) return 0; // conner case
  let sum = totalSum / 2 + target / 2;
  for (let s = sum; s > 0; s--) dp[s] = s === nums[0] ? 1 : 0;
  for (let n = 1; n < nums.length; n++)
    for (let s = sum; s > 0; s--)
      dp[s] += s - nums[n] >= 0 ? dp[s - nums[n]] : 0;
  return dp[sum];
}; // T:O(NS) S:O(S)
