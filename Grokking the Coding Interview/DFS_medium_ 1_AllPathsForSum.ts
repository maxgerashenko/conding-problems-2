// https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn
//
// All Paths for a Sum

// Problem Statement#
// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

const find_paths = function (node, sum = 0, path = []) {
  allPaths = [];

  function dfs(node, sum = 0, path = []) {
    // coner case
    if (!node) return;

    let { left, right, value } = node;
    // base case
    if (!left && !right && value === sum) {
      allPaths.push([...path, value]);
      return;
    }

    // dfs
    path.push(value);
    dfs(left, sum - value, path);
    dfs(right, sum - value, path);
    path.pop();
  }
  dfs(root, sum);

  return allPaths;
}; // T:O(N^2 or N log N) S:(N^2 or N log N)
