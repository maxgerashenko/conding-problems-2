// https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r
//
// Reverse Level Order Traversal

// Problem Statement#
// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

// Return levels in reversed order
//
// traverse BFS with queue
// unshift level to levels
// return levels

const traverse = function (root, level = [root], results = []) {
  while (level.length) {
    let tmp = [];
    let result = [];
    while (level.length) {
      let { value, left, right } = level.shift();
      result.push(value);
      left && tmp.push(left);
      right && tmp.push(right);
    }
    results.unshift(result);
    level = tmp;
  }
  return results;
}; // T:O(N) S:O(N/2) for result S:O(N);
