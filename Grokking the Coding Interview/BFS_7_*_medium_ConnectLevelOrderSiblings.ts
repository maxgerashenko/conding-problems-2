// https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03
//
// Connect Level Order Siblings

// Problem Statement#
// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

// Connect Siblings
//
// Traverse tree
// use BFS with queue
// remeber pre
// connect pre with cur
// set null at the end of the level
// return root

const connect_level_order_siblings = function (root) {
  let nodes = [root];
  while (nodes.length) {
    let level = [];
    let pre = null;
    for (let { left, right } of nodes) {
      if (pre && left) pre.next = left;
      if (left) {
        level.push(left);
        pre = left;
      }
      if (pre && right) pre.next = right;
      if (right) {
        level.push(right);
        pre = right;
      }
    }
    if (pre) pre.next = null;
    nodes = level;
  }
  return root;
}; // T:O(N) S:O(N/2)
