// https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz
//
// Binary Tree Level Order Traversal

// Problem Statement#
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

const traverse = function (root, level = [root], results = []) {
  while (level.length) {
    let { val, left, right } = level.shift();
    results.push(val);
    left && level.push(left);
    right && level.push(right);
  }
  return results;
}; // T:O(N) S:O(N) for result for traberce T:O(N) S:O(N/2) N/2 max el on level
