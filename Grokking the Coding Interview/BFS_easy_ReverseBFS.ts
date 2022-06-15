// https://www.educative.io/courses/grokking-the-coding-interview/m2N6GwARL8r
//
// Reverse Level Order Traversal

// Problem Statement#
// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

const traverse = function(root) {
  // Return levels in reversed order
  //
  // traverse BFS with queue
  // unshift level to levels
  // return levels

  if (root == null) return null;

  let queue = [root];
  let levels = [];
  while (queue.length > 0) {
    let level = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let { value, left, right } = queue.shift();

      left && queue.push(left);
      right && queue.push(right);

      level.push(value);
    }

    levels.unshift(...level);
  }

  return levels;
}; // T:O(N) S:O(N)
