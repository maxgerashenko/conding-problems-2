// https://www.educative.io/courses/grokking-the-coding-interview/xV2J7jvN1or
//
// Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

// 1 2 3 3 5 6 4 7 9 10
// 1   1     1       1
//   2 2   2 2     2 2
//       3 3 3   3 3 3
//             4 4 4 4

const count_paths = function(node, target, path = []) {
  let count = sum = 0;
  if(!node) return 0;
  let {value, left, right} = node;
  path.push(value);
  for(let i = path.length-1;i>0;i--){
    sum += path[i];
    sum === target && count++;
  }
  return count + count_paths(left, target, [...path]) + count_paths(right, target, [...path])
}; // T:O(N^2) | O(NlogN) S:O(N)
