// #1

// https://leetcode.com/problems/min-cost-climbing-stairs/

// v.2

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = [];
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < cost.length; i++) {
    // Save 2 optimized options every step
    dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1]);
  }

  // Pick up the best of 2;
  return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
};
