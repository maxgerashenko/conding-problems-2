// https://www.educative.io/courses/grokking-the-coding-interview/3j9V2QL3Ky9
//
// Structurally Unique Binary Search Trees

const find_unique_trees = function (n) {
  if (n < 1) return [];

  let map = {};
  function bfs(start, end) {
    if (start > end) return [null]; // base case

    const results = [];
    for (let i = start; i <= end; i++) {
      let leftVals = bfs(start, i - 1);
      let rightVals = bfs(i + 1, end);
      for (let l of leftVals) {
        for (let r of rightVals) {
          results.push(new Node(i, l, r));
        }
      }
    }
    return results;
  }

  return bfs(1, n);
}; // T:O(n*2^n) S:O(2^n) no n* because of recruition 4n/Vn No cach, because have to clone a tree. No cash with trees

function dfs(node) {
  if (node == null) return [];
  const { val, left, right } = node;
  return [val, ...dfs(left), ...dfs(right)];
}
