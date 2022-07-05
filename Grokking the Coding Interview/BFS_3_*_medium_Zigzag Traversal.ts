// https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0
//
// Zigzag Traversal (medium)

// Problem Statement#
// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

// BFS but reverse values when level is even

// Traverse tree
// BFS, use queue
// collect valuse is array
// if even lelve shift values
// return values

const traverse = function (root) {
  let result = [];
  let nodes = [root];
  while (nodes.length) {
    let level = [];
    let values = [];
    for (let { left, right, value } of nodes) {
      if (left) level.push(left);
      if (right) level.push(right);
      if (result.length % 2 === 0) {
        values.push(value);
        continue;
      }
      values.unshift(value);
    }
    nodes = level;
    result.push(values);
  }
  return result;
}; // T:O(N) S:O(N/2)
