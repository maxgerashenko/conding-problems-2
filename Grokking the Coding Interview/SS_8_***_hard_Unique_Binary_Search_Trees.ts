// https://www.educative.io/courses/grokking-the-coding-interview/3j9V2QL3Ky9
//
// Structurally Unique Binary Search Trees

const find_unique_trees = function (end, start = 1, results = []) {
  if (start > end) return [null]; // base case
  for (let i = start; i <= end; i++) {
    let left = find_unique_trees(i - 1, start);
    let right = find_unique_trees(end, i + 1);
    for (let l of left) {
      for (let r of right) {
        let node = new TreeNode(i, l, r);
        results.push(node);
      }
    }
  }
  return results;
}; // T:O(N2^N) S:O(2^N)  No Memoization possible
