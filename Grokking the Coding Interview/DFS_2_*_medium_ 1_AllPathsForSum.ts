// https://www.educative.io/courses/grokking-the-coding-interview/B815A0y2Ajn
//
// All Paths for a Sum

// Problem Statement#
// Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

function find_sum_of_path({value, right, left}, sum=0) {
  // base case
  sum = sum*10 + value;
  if(!right && !left) return sum;
  const leftSum = left && find_sum_of_path(left, sum) || 0;
  const rightSum = right && find_sum_of_path(right, sum) || 0
  return leftSum + rightSum;
}; // T:O(N) S:O(N)
