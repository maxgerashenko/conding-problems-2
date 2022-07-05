// https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW
//
// Level Averages in a Binary Tree

// Problem Statement#
// Given a binary tree, populate an array to represent the averages of all of its levels.

const find_level_averages = function (root) {
  let result = [];
  let nodes = [root];
  while (nodes.length) {
    let sum = 0;
    let level = [];
    for (let { right, left, value } of nodes) {
      sum += value;
      left && level.push(left);
      right && level.push(right);
    }
    result.push(sum / nodes.length);
    nodes = level;
  }
  return result;
}; // T:O(N) S(N/2)
