// https://www.educative.io/courses/grokking-the-coding-interview/gx6BMKoWqR9
//
// Count of Structurally Unique Binary Search Trees

let map = {};
const count_trees_BFS = function (n) {
  if (map[n] != null) return map[n];
  if (n <= 1) return 1; // base case;

  let count = 0;
  for (let i = 1; i <= n; i++) {
    let left = count_trees_BFS(i - 1);
    let right = count_trees_BFS(n - i);
    count += left * right;
  }

  map[n] = count;
  return count;
}; // T:O(2^n) S:(2^n) 4n/Vn - no n* coz of recursion
