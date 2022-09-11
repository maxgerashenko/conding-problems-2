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

const connect_all_siblings = function (root, level = [root], pre = null) {
  while (level.length) {
    let tmp = [];
    while (level.length) {
      let el = level.shift();
      let { left, right, value } = el;
      pre && (pre.next = el);
      pre = el;
      left && tmp.push(left);
      right && tmp.push(right);
    }
    level = tmp;
  }
}; // T:O(N) S:O(N/2)
