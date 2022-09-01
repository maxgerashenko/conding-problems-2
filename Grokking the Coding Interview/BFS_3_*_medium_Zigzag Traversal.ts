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

const traverse = function (root, level = [root], results = []) {
  while (level.length) {
    let tmp = [];
    let result = [];
    while (level.length) {
      let { value, left, right } = level.shift();
      results.length % 2 === 0 ? result.push(value) : result.unshift(value);
      left && tmp.push(left);
      right && tmp.push(right);
    }
    results.push(result);
    level = tmp;
  }
  return results;
}; // T:O(N) S:O(N/2), for result S:O(N)
