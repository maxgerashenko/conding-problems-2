// https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO
// Triplets with Smaller Sum

// Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

const find_subarrays = function (
  arr,
  target,
  results = [],
  end = 0,
  product = 1
) {
  for (let start = 0; start < arr.length; start++) {
    product = arr[start];
    end = start;
    while (end < arr.length && product < target) {
      results.push(arr.slice(start, end + 1));
      end++;
      product *= arr[end];
    }
  }
  return results;
}; // T:O(N^2) S:O(N);
