// https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP
// Pair with Target Sum

// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Brout Force O(N)
// Binary Search O(N∗logN)
// Hash Map O(N) O(N)
// 2 Pointers O(N) O(1)

const pair_with_targetsum = function (
  arr,
  target_sum,
  start = 0,
  end = arr.length - 1
) {
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === target_sum) return [start, end];
    if (sum < target_sum) {
      start++;
      continue;
    }
    end--;
  }
  return [-1, -1];
}; // T:O(N) S:O(1)
