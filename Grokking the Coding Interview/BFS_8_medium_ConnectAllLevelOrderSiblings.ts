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

const connect_all_siblings = function (root, level = [root], pre = null) {
  while (level.length) {
    let tmp = [];
    for (let el of level) {
      if (pre) pre.next = el;
      pre = el;
      let { left, right } = el;
      left && tmp.push(left);
      right && tmp.push(right);
    }
    level = tmp;
  }
}; // T:O(N) S:O(N/2)
