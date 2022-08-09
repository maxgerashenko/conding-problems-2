// https://www.educative.io/courses/grokking-the-coding-interview/R1ppNG3nV9R
// Squaring a Sorted Array

// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

const make_squares = function (
  arr,
  result = [],
  left = 0,
  rigth = arr.length - 1
) {
  while (left <= rigth) {
    if (Math.abs(arr[left]) >= Math.abs(arr[rigth])) {
      result.unshift(Math.pow(arr[left], 2));
      left++;
      continue;
    }
    result.unshift(Math.pow(arr[rigth], 2));
    rigth--;
  }
  return result;
}; // T:O(N) S:O(N)
