// https://www.educative.io/courses/grokking-the-coding-interview/3j9V2QL3Ky9
//
// Structurally Unique Binary Search Trees

function dfs(start, end, hashMap = new Map(), results = []) {
  if (hashMap.has([start, end])) return hashMap.get([start, end]);
  if (start === end) return [[]]; // conner case
  for (let i = start; i < end; i++) {
    let root = new TreeNode(i + 1);
    let letOptions = dfs(start, i);
    let rightOptions = dfs(i + 1, end);
    for (let left of letOptions)
      for (let right of rightOptions) {
        let copy = { ...root };
        copy.left = left || null;
        copy.right = right || null;
        results.push(copy);
      }
  }
  hashMap.set([start, end], results);
  return results;
}
const find_unique_trees = function (n) {
  return dfs(0, n);
}; // T:O(N*2^N) S:O(N*2^N)
