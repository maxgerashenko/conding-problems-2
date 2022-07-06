// Binary Tree Path Sum
//
// https://www.educative.io/courses/grokking-the-coding-interview/RMlGwgpoKKY

// Problem Statement#
// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

function has_path({value, left, right}, sum) {
  if(!left && !right) return sum === value;
  return left && has_path(left, sum - value) || right && has_path(right, sum - value)
} // T:O(N) S:O(N) logN not worse case
