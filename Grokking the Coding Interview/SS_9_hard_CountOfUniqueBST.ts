// https://www.educative.io/courses/grokking-the-coding-interview/gx6BMKoWqR9
//
// Count of Structurally Unique Binary Search Trees

function count_trees(n, hashMap = {}, count = 0) {
  if (hashMap[n]) return hashMap[n];
  if (n <= 1) return 1; // base case;
  for (let i = 1; i <= n; i++) {
    let left = count_trees(i - 1, hashMap);
    let right = count_trees(n - i, hashMap);
    count += left * right;
  }
  hashMap[n] = count;
  return count;
} // T:O(2^N) S:O(2^N) ; memp T:O(2^N) S:O(N)
