// https://www.educative.io/courses/grokking-the-coding-interview/3j9V2QL3Ky9
//
// Structurally Unique Binary Search Trees

const find_unique_trees = function (end, start = 1, result = []) {
  if (start > end) return [null];
  for (let i = start; i <= end; i++) {
    let left = find_unique_trees(i - 1, start);
    let right = find_unique_trees(end, i + 1);
    for (let l of left) {
      for (let r of right) {
        result.push(new TreeNode(i, l, r));
      }
    }
  }
  return result;
}; // T:O(N2^N) S:O(2^N) No Memoization possible
