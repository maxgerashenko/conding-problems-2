// https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69
//
// Sum of Path Numbers

function find_sum_of_path_numbers({ value, right, left }, sum = 0) {
  sum = sum * 10 + value; // base case
  if (!right && !left) return sum;
  const leftSum = (left && find_sum_of_path_numbers(left, sum)) || 0;
  const rightSum = (right && find_sum_of_path_numbers(right, sum)) || 0;
  return leftSum + rightSum;
} // T:O(N) S:O(N)
