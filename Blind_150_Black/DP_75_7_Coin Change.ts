// https://leetcode.com/problems/coin-change/submissions/
// Coin Change

// DP
// DP is all numbe from 1 to targer
// DP[0] is 0 to cover conner case when rest is 0
// set all dp to Infinity or amount + 1
// return min dp[n] or 1 + dp[rest]
// for of nums + for of coins
//
// T:O(NM) S:O(N)

function coinChange(coins: number[], amount: number): number {
  let dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  coins.sort((a, b) => a - b);
  for (let num = 1; num <= amount; num++) {
    for (let coin of coins) {
      if (num - coin < 0) continue;
      dp[num] = Math.min(dp[num], 1 + dp[num - coin]);
    }
  }

  return dp[amount] == amount + 1 ? -1 : dp[amount];
} // T:O(NM) S:O(M)
