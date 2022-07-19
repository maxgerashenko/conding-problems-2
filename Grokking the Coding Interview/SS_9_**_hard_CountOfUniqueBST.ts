// https://www.educative.io/courses/grokking-the-coding-interview/gx6BMKoWqR9
//
// Count of Structurally Unique Binary Search Trees

const count_trees = function (end, start = 1, map = {}, count = 0) {
  if (map[end - start] != null) return map[end - start]; // memoizetion
  if (start > end) return 1; // base case
  for (let i = start; i <= end; i++) {
    let left = count_trees(i - 1, start, map);
    let right = count_trees(end, i + 1, map);
    count += left * right;
  }
  map[end - start] = count;
  return count;
}; // T:O(N2^N) S:O(2^N) memo T:O(2^N) S:O(N)
