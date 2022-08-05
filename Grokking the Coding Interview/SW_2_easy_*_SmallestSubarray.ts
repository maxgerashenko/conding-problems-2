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
  sum = arr[0],
  minLen = Infinity
) {
  while (start <= end && end < arr.length) {
    if (sum < s) sum += arr[++end];
    if (sum >= s) minLen = Math.min(minLen, end - start + 1);
    if (sum >= s) sum -= arr[start++];
  }
  return minLen;
}; // T:O(N) S:O(1)
