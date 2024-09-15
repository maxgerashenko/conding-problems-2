// https://leetcode.com/problems/burst-balloons/submissions/1390631825/
//
// Burst Balloons

// included in the actual bursting
// valid starting positions
// i is an actual index that can be burst
// bottom-up DP approach
// dp[left][right] is the maximum coins for subarrays

// bottom up solution
// diagonal dp matrix
// protect bounderies with pre/post injections
function maxCoins(nums: number[]): number {
  const pNums = [1, ...nums, 1];
  const length = pNums.length;
  const dp = Array(length).fill(0).map(() => Array(length).fill(0));

  for (let len = 2;
      len < length; // actual 1
      len++) {
      for (let left = 0;
          left < length - len;
          left++) {
          const right = left + len;
          for (let i = left + 1;
              i < right;
              i++) {
              dp[left][right] = Math.max(
                  dp[left][right],
                  dp[left][i] +
                  pNums[left] * pNums[i] * pNums[right] +
                  dp[i][right]
              );
          }
      }
  }

  return dp[0][length - 1]; // solution is top right value in the matrix
}; // T:O(n^3)  S:O(n^2)