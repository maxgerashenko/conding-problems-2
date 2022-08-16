//
// Smallest Subarray

// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

// Sliding window O(N+N)
// Outer loop process all elements
// Inner `while` loop processes each element only once

const smallest_subarray_sum = function (
  s,
  arr,
  start = 0,
  end = 0,
  sum = 0,
  min = Infinity
) {
  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    while (sum >= s) {
      min = Math.min(min, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }
  return min === Infinity ? -1 : min;
}; // T:O(N) S:O(1)
