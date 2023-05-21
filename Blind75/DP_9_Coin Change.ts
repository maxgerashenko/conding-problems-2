// https://leetcode.com/problems/coin-change/description/
// Coin Change

// init coins
// bottom up
// base is 0
// set dp as min value

function coinChange(coins: number[], target: number): number {
  let dp = new Array(target + 1).fill(Number.MAX_SAFE_INTEGER);
  dp[0] = 0;

  for (let i = 1; i <= target; i++)
    for (let c of coins) {
      if (i - c < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - c]);
    }
  return dp[target] === Number.MAX_SAFE_INTEGER ? -1 : dp[target];
} // T:O(N) S:O(N)
