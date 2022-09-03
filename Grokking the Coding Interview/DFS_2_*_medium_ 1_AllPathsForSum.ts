// https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn
//
// All Paths for a Sum

// Problem Statement#
// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

const find_paths = function (
  { left, right, value },
  sum,
  path = [],
  results = []
) {
  if (!left && !right && value === sum) return [[...path, value]];
  let leftResults =
    (left && find_paths(left, sum - value, [...path, value])) || [];
  let rightResults =
    (right && find_paths(right, sum - value, [...path, value])) || [];
  return [...leftResults, ...rightResults];
}; // T:O(N) S:O(N)
