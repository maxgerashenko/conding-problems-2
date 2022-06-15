// https://www.educative.io/courses/grokking-the-coding-interview/qVA27MMYYn0
//
// Zigzag Traversal (medium)

// Problem Statement#
// Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

const traverse = function(root) {
  // BFS but reverse values when level is even

  // Traverse tree
  // BFS, use queue
  // collect valuse is array
  // if even lelve shift values
  // return values

  let values = [];

  // conner case
  if (root == null) return values;

  let queue = [root];
  let len = queue.length;
  while (len > 0) {
    let level = [];

    for (let i = 0; i < len; i++) {
      let { value, left, right } = queue.shift();
      values.length % 2 === 0 ? level.push(value) : level.unshift(value);

      left && queue.push(left);
      right && queue.push(right);
    }

    values.push(level);
    len = queue.length;
  }

  return values;
}; // T:O(N) S:O(N)
