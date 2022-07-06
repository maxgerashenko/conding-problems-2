// https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn
//
// All Paths for a Sum

// Problem Statement#
// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.



function DFS({ value, left, right }, sum, allPaths, path = []) {
  if (!left && !right) {
    if (sum === value) allPaths.push([...path, value]);
    return;
  }
  left && DFS(left, sum - value, allPaths, [...path, value]);
  right && DFS(right, sum - value, allPaths, [...path, value]);
}

function find_paths(root, sum) {
  let allPaths = [];
  DFS(root, sum, allPaths);
  return allPaths;
} // T:O(NlogN) S:O(NlogN) N-time to copy array N-space for array
