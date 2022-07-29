// 0/1 Knapsack (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/gkZNLjV2kBk

// Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’ Each item can only be selected once, which means either we put an item in the knapsack or we skip it.

function solveKnapsack(profits, weights, capacity, matrix = []) {
  for (let i = 0; i < capacity + 1; i++)
    matrix[i] = weights[0] <= i ? profits[0] : 0; // init 1st row
  for (let i = 1; i < profits.length; i++) {
    for (let c = capacity; c >= 0; c--)
      matrix[c] = Math.max(
        matrix[c],
        c >= weights[i] ? profits[i] + matrix[c - weights[i]] : 0
      );
  }
  return matrix[capacity];
} // T:O(CN) S:(C) , C-capacity N-elements count
