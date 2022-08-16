// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP#problem-statement
// Maximum Sum Subarray

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function (k, arr, start = 0, sum = 0, max = 0) {
  for (let end = 0; end < k; end++) sum += arr[end];
  for (let end = k; end < arr.length; end++) {
    max = Math.max(max, sum);
    sum += arr[end];
    sum -= arr[start];
    start++;
  }
  return max;
}; // T:O(N) S:O(1)
