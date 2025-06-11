//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// right check all position
// left finds the minimum
// also can just find the min

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

// T:(N) S:O(1);

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let index = 1; index < prices.length; index++) {
    minPrice = Math.min(minPrice, prices[index]);
    maxProfit = Math.max(maxProfit, prices[index] - minPrice);
  }
  return maxProfit;
};

// T:(N) S:O(1);
