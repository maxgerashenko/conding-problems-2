// https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69
//
// Sum of Path Numbers

const find_sum_of_path_numbers = function ({ value, left, right }, sum = 0) {
  sum = sum * 10 + value;
  if (!left && !right) return sum;
  const leftSum = (left && find_sum_of_path_numbers(left, sum)) || 0;
  const rightSum = (right && find_sum_of_path_numbers(right, sum)) || 0;
  return leftSum + rightSum;
}; // T:O(N) S:O(N)
