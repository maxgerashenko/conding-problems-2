// Maximum Depth of Binary Tree
//
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Maximum Depth of Binary Tree

var maxDepth = function (node) {
  // base case
  if (!node) return 0;

  const { left, right } = node;
  return Math.max(maxDepth(left), maxDepth(right)) + 1;
};
