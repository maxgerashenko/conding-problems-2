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

const traverse = function (root) {
  let result = [];
  let nodes = [root];
  while (nodes.length > 0) {
    let values = [];
    let level = [];
    for (let { value, left, right } of nodes) {
      values.push(value);
      if (left) level.push(left);
      if (right) level.push(right);
    }
    nodes = level;
    result.unshift(values);
  }

  return result;
}; // T:O(N) S:(N/2)
