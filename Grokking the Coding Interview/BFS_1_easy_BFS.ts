// https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz
//
// Binary Tree Level Order Traversal

// Problem Statement#
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

const traverse = function (root) {
  let result = [];
  let nodes = [root];
  while (nodes.length) {
    let { left, right, val } = nodes.shift();
    result.push(val);
    if (left) nodes.push(left);
    if (right) nodes.push(right);
  }

  return result;
}; // T:O(N) S:O(N/2)
