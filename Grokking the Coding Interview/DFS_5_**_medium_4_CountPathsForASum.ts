// https://www.educative.io/courses/grokking-the-coding-interview/xV2J7jvN1or
//
// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

// 1 2 3 3 5 6 4 7 9 10
// 1   1     1       1
//   2 2   2 2     2 2
//       3 3 3   3 3 3
//             4 4 4 4

const count_paths = function (
  { value, left, right },
  S,
  path = [],
  sum = 0,
  count = 0
) {
  path.push(value);
  sum += value;
  let curSum = sum;
  for (let val of path) {
    if (curSum === S) count++;
    if (curSum < S) break;
    curSum -= val;
  }
  const leftCount = (left && count_paths(left, S, path, sum)) || 0;
  const rightCount = (right && count_paths(right, S, path, sum)) || 0;
  return count + leftCount + rightCount;
}; // T:O(N^2) S:O(N) call stack
