// https://www.educative.io/courses/grokking-the-coding-interview/B8nj5RB1LJo
//
// Right View of a Binary Tree

// Right View of a Binary Tree (easy)#
// Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

// Right view of Binary Tree
//
// Use BFS + Queue
// take the last value from the level
// return last values from the level

const tree_right_view = function (root) {
  let result = [root.value];
  let nodes = [root];
  while (nodes.length) {
    let level = [];
    for (let { left, right } of nodes) {
      left && level.push(left);
      right && level.push(right);
    }
    nodes = [...level];
    level.length && result.push(level.pop().value);
  }
  return result;
}; // T:O(N) S:O(N/2)
