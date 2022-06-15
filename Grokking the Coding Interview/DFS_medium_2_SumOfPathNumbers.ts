// https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69
//
// Sum of Path Numbers

const find_sum_of_path_numbers = function (root) {
  // conner case
  if (!root) return -1;

  function dfs(node, sum = 0) {
    // conner case
    if (!node) return 0;

    // base case
    let { value, right, left } = node;

    sum = sum * 10 + value;
    if (!right && !left) return sum;

    return dfs(left, sum) + dfs(right, sum);
  }

  return dfs(root);
}; // T:O(N) S:O(N || log N)- to store recursive stack
