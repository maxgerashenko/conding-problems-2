// Path with Maximum Sum
//
// https://www.educative.io/courses/grokking-the-coding-interview/B89q6NpX0Vx

const find_maximum_path_sum = function (node) {
  let maxSum = 0;

  function step(node) {
    // conner case
    if (!node) return 0;

    let { value, left, right } = node;
    // base case
    if (!(left || right)) return value;

    let leftSum = step(left);
    let rightSum = step(right);
    maxSum = Math.max(maxSum, leftSum + rightSum) + value;

    return Math.max(leftSum, leftSum) + value;
  }
  step(root);

  return maxSum === 0 ? -1 : maxSum;
};
