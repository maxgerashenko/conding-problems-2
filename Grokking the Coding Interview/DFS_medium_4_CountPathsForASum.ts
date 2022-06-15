// https://www.educative.io/courses/grokking-the-coding-interview/xV2J7jvN1or
//
// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

const count_paths = function (root, S) {
  // conner case
  if (!root) return -1;

  let count = 0;

  function dfs(node, path = []) {
    if (!node) return;

    let { left, right, value } = node;
    path.unshift(value);

    let sum = 0;
    for (let el of path) {
      sum += el;
      if (sum == S) count++;
    }

    // dfs
    dfs(left, path);
    dfs(right, path);
    // back track
    path.shift();
  }

  dfs(root);

  return count;
}; // T:O(N log N) S:O(N) for call stack for linked list
