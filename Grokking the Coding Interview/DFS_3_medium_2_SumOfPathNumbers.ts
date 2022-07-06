// https://www.educative.io/courses/grokking-the-coding-interview/YQ5o5vEXP69
//
// Sum of Path Numbers

function DFS({ value, left, right }, result, path = '') {
  if (!left && !right) {
    result.sum += Number(path + value);
    return;
  }
  left && DFS(left, result, path + value);
  right && DFS(right, result, path + value);
}

const find_sum_of_path_numbers = function (root) {
  let result = { sum: 0 };
  DFS(root, result);
  return result.sum;
}; // T:O(N) S:(N) or S(logN)
