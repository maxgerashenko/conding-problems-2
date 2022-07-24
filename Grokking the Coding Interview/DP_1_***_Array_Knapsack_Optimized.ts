// 0/1 Knapsack (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/gkZNLjV2kBk

// Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’ Each item can only be selected once, which means either we put an item in the knapsack or we skip it.

let solveKnapsack = function (profits, weights, capacity, dp = []) {
  dp = [[0], [0]];
  for (let c = 0; c < capacity + 1; c++) {
    dp[0][c] = c >= weights[0] ? profits[0] : 0;
  } // 1st row
  for (let i = 1; i < profits.length; i++) {
    for (let c = capacity; c > 0; c--) {
      dp[i % 2][c] = Math.max(
        dp[(i - 1) % 2][c],
        c >= weights[i] ? profits[i] + dp[(i - 1) % 2][c - weights[i]] : 0
      );
    }
  }
  return dp[(profits.length - 1) % 2][capacity];
}; // T:O(N*C) S:O(C)
