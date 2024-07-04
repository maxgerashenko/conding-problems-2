// Best Time to Buy and Sell Stock with Cooldown
//
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/

function maxProfit(prices: number[]): number {
  let len = prices.length;
  let dp = new Map();

  function dfs(i, canSell) {
    if (i >= len) return 0; // base case

    if (dp.has(`${i}, ${canSell}`)) return dp.get(`${i}, ${canSell}`); // cash

    let standBy = dfs(i + 1, canSell);
    if (canSell) {
      let selling = dfs(i + 2, false) + prices[i];
      dp.set(`${i}, ${canSell}`, Math.max(selling, standBy));
    } else {
      let buying = dfs(i + 1, true) - prices[i];
      dp.set(`${i}, ${canSell}`, Math.max(standBy, buying));
    }

    return dp.get(`${i}, ${canSell}`);
  }
  return dfs(0, false);
} // T:O(2n) S:O(2n);
