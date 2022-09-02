// https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO
//
// Minimum Depth of a Binary Tree

// Problem Statement#
// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

const find_minimum_depth = function (root, level = [root], count = 0) {
  // conner case
  while (level.length) {
    let tmp = [];
    count++;
    while (level.length) {
      const { left, right } = level.shift();
      if (!left && !right) return count;
      tmp.push(left, right);
    }
    level = tmp;
  }
}; // T:O(N) S:O(N/2)
