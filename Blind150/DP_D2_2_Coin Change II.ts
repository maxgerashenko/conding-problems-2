// https://leetcode.com/problems/coin-change-ii/
// Coin Change II

// DP best T:(m*n) S:O(n)
//
// use dp
// m is coins reversed
// n is amount
// amount is amount + 1 with [0] = 1;
// coins is [last + 1] = 0, but use initial dp [] instead j-1
// use only tmp and i - coins[j]
//
// T:O(m*n) S:O(n)
function change(amount: number, coins: number[]): number {
  let m = coins.length;
  let n = amount + 1;
  let dp = Array(n).fill(0);
  dp[0] = 1;

  for (let j = m - 1; j >= 0; j--) {
    let tmp = [...dp];
    for (let i = 1; i < n; i++) {
      if (i - coins[j] < 0) continue;
      tmp[i] += tmp[i - coins[j]];
    }
    dp = tmp;
  }

  return dp[n - 1];
} // T:O(m*n) S:O(n)

// DP amount vs coins, not the best space complexity
//
// Use dp
// matrix
// always iterate i reversed
// it is bottom up
// return is dp[amount][0], I know WTF
// matrix is amount as m, coins as n
// amount [0] = 1 1 1 1 1 as 5 - 5 =0 === 1 option
// ignore result < 0 index
// add 0 row with 1s for amoutn [amount - coin[j]][]
// add last row with 0s for couins,  [][i+1]
// m = anount
//
// T:O(m*n) S:O(m*n)
function change(amount: number, coins: number[]): number {
  let m = amount + 1;
  let n = coins.length + 1;
  let dp = Array(m).fill(0);
  dp = dp.map((el) => Array(n).fill(0));
  dp[0] = dp[0].map((el) => 1);

  for (let j = 1; j < m; j++)
    for (let i = n - 2; i >= 0; i--) {
      dp[j][i] = dp[j][i + 1];
      if (j - coins[i] < 0) continue; // conner case
      dp[j][i] += dp[j - coins[i]][i]; // base case
    }

  return dp[amount][0];
} // T:O(m*n) S:O(m*n)

// use DFS + Cache + optimization
// instead of for... for each option use only option >= i
// optimisation reduce duplicates as 2-1-1 and 1-1-2
// dfs is about to reuse existing count for skip to next
// 1st checks we run out of coins options index >= coins.length
// 2nd check we run out of amount, when use the same coin many times
// base case amouin is 0, return +1 posible solution

// DFS
function change(amount: number, coins: number[]): number {
  let cache = {};
  let len = coins.length;

  function dfs(index, amount) {
    if (index >= len) return 0; // conner case
    if (amount < 0) return 0; // conner case
    if (amount === 0) return 1; // base case
    if ('' + index + ':' + amount in cache)
      return cache['' + index + ':' + amount];

    cache['' + index + ':' + amount] =
      dfs(index, amount - coins[index]) + dfs(index + 1, amount);
    return cache['' + index + ':' + amount];
  }

  return dfs(0, amount);
} // T:O(m*n) S:O(m*n)
