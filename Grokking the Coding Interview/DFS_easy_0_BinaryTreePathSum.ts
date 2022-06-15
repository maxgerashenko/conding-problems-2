// Binary Tree Path Sum
//
// https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY

// Problem Statement#
// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

const has_path = function (node, sum = 0) {
  // conner and base case
  if (!node) return false;

  let { value, left, right } = node;

  // a leaf node
  if (!left && !right && value === sum) return true;

  // DFS
  return has_path(left, sum - value) || has_path(right, sum - value);
}; // T:O(N) S:(N or log N) recursive stack size, worse case linked list
