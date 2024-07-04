// Coin Change II
//
// https://leetcode.com/problems/coin-change-ii/description/

function change(amount: number, coins: number[]): number {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    let pre = [...dp];
    for (let i = 1; i < amount + 1; i++) {
      dp[i] = (i - coin < 0 ? 0 : dp[i - coin]) + pre[i];
    }
  }

  return dp[amount];
} // T:O(n*m) S:O(n)
