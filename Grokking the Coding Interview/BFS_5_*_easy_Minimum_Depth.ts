// https://www.educative.io/courses/grokking-the-coding-interview/3jwVx84OMkO
//
// Minimum Depth of a Binary Tree

// Problem Statement#
// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

const find_minimum_depth = function(root) {
  let nodes = [root];
  let count = 1;
  while(nodes.length){
    let level = [];
    for(let {left, right} of nodes){
      left && level.push(left);
      right && level.push(right);
      if(!level.length) return count;
    }
    count++;
    nodes = level;
  }
  return 0;
}; // T:O(N-(N/2-1)) S:O(N/2)
