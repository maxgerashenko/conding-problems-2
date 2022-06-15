// https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr
//
// Level Order Successor

// Problem Statement#
// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

const find_successor = function(root, key) {
  // Find next el
  //
  // Traverse tree
  // use BFS
  // use queque for each level
  // find key in the result

  // conner case
  if (root == null || key == null) return null;

  let queque = [root];
  while (queque.length > 0) {
    let len = queque.length;
    for (let i = 0; i < len; i++) {
      let node = queque.shift();
      let { value, left, right } = node;

      left && queque.push(left);
      right && queque.push(right);

      if (value === key) {
        keyIndex = nodes.length - 1;
      }
    }
  }

  return nodes[keyIndex + 1];
}; // T:O(N) S:O(N)
