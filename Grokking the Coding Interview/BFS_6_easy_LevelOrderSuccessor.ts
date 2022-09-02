// https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr
//
// Level Order Successor

// Problem Statement#
// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

const find_successor = function (root, key, level = [root], isNext = false) {
  // conner case
  while (level.length) {
    let tmp = [];
    while (level.length) {
      const { val, left, right } = level.shift();
      if (isNext) return { val };
      if (val === key) isNext = true;
      left && tmp.push(left);
      right && tmp.push(right);
    }
    level = tmp;
  }
  return null;
}; // T:O(N) S:O(N/2)
