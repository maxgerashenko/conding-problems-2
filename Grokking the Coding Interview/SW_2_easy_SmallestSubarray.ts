//
// Smallest Subarray

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Sliding window O(N+N)
// Outer loop process all elements
// Inner `while` loop processes each element only once

const smallest_subarray_with_given_sum = function(s, arr) {
  // find the length of the smallest subarray whose sum
  // is >= equal s
  // init sum
  // init min length = Infinity
  // iterate the array
  // use 2 pointers from 1 side as a sliding window
  // when sum >= s, update the min width
  // return 0 if it is Infinity, or min length

  // not 0, need to use Infinity for min value
  let minLength = Infinity;

  let start = 0,
    sum = 0;
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum >= s) {
      minLength = Math.min(length, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return minLength == Infinity ? 0 : minLength;
}; // O(N+N),
