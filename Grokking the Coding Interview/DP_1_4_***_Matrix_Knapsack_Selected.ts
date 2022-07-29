// 0/1 Knapsack (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/gkZNLjV2kBk

// Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’ Each item can only be selected once, which means either we put an item in the knapsack or we skip it.

let solveKnapsack = function (
  profits,
  weights,
  capacity,
  matrix = [],
  selected = []
) {
  for (let i in profits) matrix[i] = [0]; // 1st col
  for (let c = 1; c < capacity + 1; c++)
    matrix[0][c] = c >= weights[0] ? profits[0] : 0;
  for (let i = 1; i < profits.length; i++)
    for (let c = 1; c < capacity + 1; c++)
      matrix[i][c] = Math.max(
        matrix[i - 1][c],
        c >= weights[i] ? profits[i] + matrix[i - 1][c - weights[i]] : 0
      );
  let i = profits.length - 1;
  let c = capacity;
  while (matrix[i] && matrix[i][c] > 0) {
    if (matrix[i - 1] && matrix[i][c] == matrix[i - 1][c]) {
      i--;
      continue;
    }
    selected.push(weights[i]);
    c -= weights[i];
    i--;
  }
  return selected;
}; // T:(NC) T:(NC)
