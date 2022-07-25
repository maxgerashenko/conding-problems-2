// 0/1 Knapsack (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/gkZNLjV2kBk

// Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’ Each item can only be selected once, which means either we put an item in the knapsack or we skip it.

const dp = new Map();
function solveKnapsack(profits, weights, capacity, maxProfit = 0) {
  if (!dp.has(profits)) dp.set(profits, {}); // init dp
  if (dp.get(profits)[capacity] != null) return dp.get(profits)[capacity]; // dp
  if (weights.length === 1) return capacity - weights[0] >= 0 ? profits[0] : 0; // base case
  for (let i = 0; i < profits.length; i++) {
    if (capacity - weights[i] < 0) continue;
    let profit = solveKnapsack(
      profits.filter((el) => el != profits[i]),
      weights.filter((el) => el != weights[i]),
      capacity - weights[i]
    );
    maxProfit = Math.max(maxProfit, profits[i] + profit);
  }
  dp.get(profits)[capacity] = maxProfit;
  return maxProfit;
} // T:O(2^N) S:O(N)
