// https://www.educative.io/courses/grokking-the-coding-interview/JPKr0kqLGNP#problem-statement
// Maximum Sum Subarray

// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function (k, arr) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  max = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }
  return max;
}; // T:O(N) S:O(K)
