// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
//  Best Time to Buy and Sell Stock with Cooldown

// use DP
// use caching
// use map with 2 params index + boolean = value
// not reversed
// use DFS
// 3 options buy sell skip
// use max for value
// start with 0, true
//
// BF T:O(2^N) S:O(N)
// T:O(N) S:O(N)

function maxProfit(prices: number[]): number {
  let dp = {};

  function dfs(index, canBuy) {
    if (index >= prices.length) return 0; // base case, did't sell
    if ('' + index + canBuy in dp) return dp['' + index + canBuy]; // base case, cache

    let price = prices[index]; // current price
    let skip = dfs(index + 1, canBuy); // no action
    let buySell = canBuy
      ? dfs(index + 1, !canBuy) - price // just buy
      : dfs(index + 2, !canBuy) + price; // cooldown when sell
    dp['' + index + canBuy] = Math.max(skip, buySell); // store in cache
    return dp['' + index + canBuy]; // result
  }

  return dfs(0, true);
} // T:O(N) S:O(N)
