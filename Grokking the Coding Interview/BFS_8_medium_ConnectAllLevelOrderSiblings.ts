// https://www.educative.io/courses/grokking-the-coding-interview/NE5109Jl02v
//
// Connect All Level Order Siblings

// Connect All Level Order Siblings (medium)#
// Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

// Connect All siblings
//
// Traverse tree
// Use BFS and queue
// save pre
// update pre next with current
// connect nodes from diffrent levels
// return root

const connect_all_siblings = function (root) {
  let nodes = [root];
  let pre = null;
  while (nodes.length) {
    let level = [];
    for (let node of nodes) {
      if (pre) pre.next = node;
      pre = node;
      let { left, right } = node;
      left && level.push(left);
      right && level.push(right);
    }
    nodes = level;
  }
  return root;
}; // T:O(N) S:O(N/2)
