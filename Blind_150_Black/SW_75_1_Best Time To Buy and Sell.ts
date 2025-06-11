// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Best Time to Buy and Sell Stock

// use SW
// need to buy once
// if right <= left, left === right
// iterate right
// calcuate current,
// max = Math.max(max, cur)
// return max

/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices: number[]): number {
  let left = 0;
  let max = 0;
  let n = prices.length;

  for (let right = 0; right < n; right++) {
    console.log(prices[left], prices[right]);
    let cur = prices[right] - prices[left];

    if (prices[right] <= prices[left]) {
      left = right;
    }

    max = Math.max(max, cur);
  }

  return max;
} // T:O(n) S:O(1)
