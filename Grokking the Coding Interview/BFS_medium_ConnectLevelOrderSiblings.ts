// https://www.educative.io/courses/grokking-the-coding-interview/m2YYxXDOJ03
//
// Connect Level Order Siblings

// Problem Statement#
// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

const connect_level_order_siblings = function(root) {
  // Connect Siblings
  //
  // Traverse tree
  // use BFS with queue
  // remeber pre
  // connect pre with cur
  // set null at the end of the level
  // return root

  // conner case
  if (root == null) return root;

  let queue = [root];
  while (queue.length > 0) {
    let levelSize = queue.length;
    let pre = null;
    for (let i = 0; i < levelSize; i++) {
      let cur = queue.shift();
      let { left, right } = cur;

      left && queue.push(left);
      right && queue.push(right);

      pre && (pre.next = cur);
      pre = cur;
    }
    pre.next = null;
  }

  return root;
}; // T:O(N) S:O(N)
