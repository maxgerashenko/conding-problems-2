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

const connect_level_order_siblings = function (root, level = [root]) {
  while (level.length) {
    let tmp = [];
    let pre = null;
    while (level.length) {
      el = level.pop();
      el.next = pre;
      pre = el;
      let { left, right } = el;
      right && tmp.unshift(right);
      left && tmp.unshift(left);
    }
    level = tmp;
  }
  return root;
}; // T:O(N) S:O(N/2)
