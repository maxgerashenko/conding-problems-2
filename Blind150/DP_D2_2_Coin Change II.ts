// https://leetcode.com/problems/coin-change-ii/
// Coin Change II

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
