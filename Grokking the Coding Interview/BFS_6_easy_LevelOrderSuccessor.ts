// https://www.educative.io/courses/grokking-the-coding-interview/7nO4VmA74Lr
//
// Level Order Successor

// Problem Statement#
// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

const find_successor = function(root, key) {
  let nodes = [root];
  let pre = null;
  while(nodes.length){
    let node = nodes.shift();
    if(pre && pre.val === key) return node;
    pre = node;
    let {left, right} = node;
    left && nodes.push(left);
    right && nodes.push(right);
  }
  return null;
}; // T:O(N) S:O(N/2)
