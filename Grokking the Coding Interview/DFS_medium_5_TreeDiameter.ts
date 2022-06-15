// Tree Diameter
//
// https://www.educative.io/courses/grokking-the-coding-interview/xVV1jA29YK9

// Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

// Note: You can always assume that there are at least two leaf nodes in the given tree.

const find_maximum_path_sum = function (root) {
  // conner case
  if (!root) return -1;

  let maxSum = 0;

  function dfs(node) {
    // conner case
    if (!node) return 0;

    let { left, right, value } = node;

    const leftSum = dfs(left);
    const rightSum = dfs(right);

    // update max
    maxSum = Math.max(maxSum, leftSum + rightSum + value);

    // base case
    return Math.max(dfs(left), dfs(right)) + value;
  }
  dfs(root);

  return maxSum === 0 ? -1 : maxSum;
}; // T:O(n) S:O(n or log n)
