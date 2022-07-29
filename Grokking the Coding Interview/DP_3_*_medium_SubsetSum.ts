// Subset Sum (medium)
//
// https://www.educative.io/courses/grokking-the-coding-interview/gxrnL0GQGqk

// Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

const canPartitionOptimized = function (nums, sum, matrix = [true]) {
  for (let s = 1; s < sum + 1; s++) matrix[s] = s === nums[0]; // 1st row
  for (let i = 1; i < nums.length; i++)
    for (s = sum; s > 0; s--)
      matrix[s] = matrix[s] || (s >= nums[i] && matrix[s - nums[i]]);
  return matrix[sum];
}; // T:O(NS) S:O(S)
