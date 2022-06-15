// https://www.educative.io/courses/grokking-the-coding-interview/NE5109Jl02v
//
// Connect All Level Order Siblings

// Connect All Level Order Siblings (medium)#
// Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

const connect_all_siblings = function(root) {
  // Connect All siblings
  //
  // Traverse tree
  // Use BFS and queue
  // save pre
  // update pre next with current
  // connect nodes from diffrent levels
  // return root

  // conner case
  if (root == null) return null;

  let queue = [root];
  let pre = null;
  while (queue.length > 0) {
    let cur = queue.shift();
    let { left, right } = cur;

    left && queue.push(left);
    right && queue.push(right);

    pre && (pre.next = cur);
    pre = cur;
  }
  pre.next = null;

  return root;
}; // T:O(N) S:O(N)
