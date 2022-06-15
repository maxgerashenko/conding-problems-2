// https://www.educative.io/courses/grokking-the-coding-interview/YQWkA2l67GW
//
// Level Averages in a Binary Tree

// Problem Statement#
// Given a binary tree, populate an array to represent the averages of all of its levels.

const find_level_averages = function(root) {
  // BFS with average of the level
  //
  // use BSF
  // use queue
  // get average of level values
  // return values array

  let avr = [];

  // conner case
  if (root == null) return avr;

  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      let { value, left, right } = queue.shift();
      sum += value;

      left && queue.push(left);
      right && queue.push(right);
    }

    avr.push(sum / len);
  }

  return avr;
}; // T:O(N) S:O(N)
