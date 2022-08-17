// https://www.educative.io/courses/grokking-the-coding-interview/RMV1GV1yPYz
// Subarrays with Product Less than a Target

// Given an array with positive numbers and a positive target number, find all of its contiguous subarrays whose product is less than the target number.

// Take away
// To count all arrays, when product is less all sub arrays between start and end are valid
// interate and take all of them

const find_subarrays = function (
  arr,
  target,
  results = [],
  start = 0,
  product = 1
) {
  for (let end = 0; end < arr.length; end++) {
    product *= arr[end];
    while (product >= target) {
      product /= arr[start];
      start++;
    }
    let tmp = start;
    while (tmp <= end) {
      results.push(arr.slice(tmp, end + 1));
      tmp++;
    }
  }
  return results;
}; // T:O(N^3) S:O(N) N - 2P N^2 for subarray
