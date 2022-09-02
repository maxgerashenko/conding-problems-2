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

const tree_right_view = function (root, level = [root], results = []) {
  while (level.length) {
    let tmp = [];
    results.push(level[level.length - 1].value);
    for (let { left, right } of level) {
      left && tmp.push(left);
      right && tmp.push(right);
    }
    level = tmp;
  }
  return results;
}; // T:O(N) S:O(N)
