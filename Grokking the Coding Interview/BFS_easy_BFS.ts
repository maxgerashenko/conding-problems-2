// https://www.educative.io/courses/grokking-the-coding-interview/xV7E64m4lnz
//
// Binary Tree Level Order Traversal

// Problem Statement#
// Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

const traverse = function(root) {
  // BFS
  //
  // traverse binary tree
  // store all childs in the queque

  // conner case
  if (root == null) return [];

  // traverse
  let queue = [root];
  let values = [];
  while (queue && queue.length > 0) {
    let { value, left, right } = queue.shift();
    values.push(value);
    left && queue.push(left);
    right && queue.push(right);
  }

  return values;
}; // T:O(N) S:O(N)
