// https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW
//
// Level Averages in a Binary Tree

// Problem Statement#
// Given a binary tree, populate an array to represent the averages of all of its levels.

const find_level_averages = function (root, level = [root], results = []) {
  // conner case
  while (level.length) {
    let tmp = [];
    let len = level.length;
    let sum = 0;
    while (level.length) {
      let { value, left, right } = level.shift();
      left && tmp.push(left);
      right && tmp.push(right);
      sum += value;
    }
    level = tmp;
    results.push(sum / len);
  }
  return results;
}; // T:O(N) S:O(N/2), for resuls S:O(Log(n+1))-1)
