// https://www.educative.io/courses/grokking-the-coding-interview/qZWW7Ny0Dk3#Target-Sum-(hard)
//
// Target Sum (hard)

// S1 + S2 = SUM
// S1 - S2 = Taget
// S1+S1 + S2-S2 = SUM+Target
// S2*S1 + 0 = Sum+Target
// S1 = (Sum+Targe)/2
const findTargetSubsets = function (
  nums,
  target,
  dp = [1],
  sumTotal = nums.reduce((pre, el) => pre + el, 0)
) {
  if ((target + sumTotal) % 2 !== 0) return 0;
  let sum = (target + sumTotal) / 2;
  for (let s = 1; s < sum + 1; s++) dp[s] = s === nums[0] ? 1 : 0; // init 1st row
  for (let i = 1; i < nums.length; i++)
    for (let s = sum; s > 0; s--)
      dp[s] += s - nums[i] >= 0 ? dp[s - nums[i]] : 0;
  return dp[sum];
}; // T:O(N*S) S:O(N)
