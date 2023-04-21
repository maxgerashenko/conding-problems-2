//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// right check all position
// left finds the minimum
// also can just find the min

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};

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
