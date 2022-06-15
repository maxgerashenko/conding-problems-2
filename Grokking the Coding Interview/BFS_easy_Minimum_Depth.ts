// https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO
//
// Minimum Depth of a Binary Tree

// Problem Statement#
// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

const find_minimum_depth = function(root) {
  // Min depth
  //
  // iterate, use bfs
  // count depth
  // exit as soon as node doesn't have childrens

  // conner case
  if (root == null) return 0;

  let depth = 1;
  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let { left, right } = queue.shift();
      if (left == null && right == null) return depth;

      left && queue.push(left);
      right && queue.push(right);
    }
    depth++;
  }

  return depth;
}; // T: O(N) S:(N)
