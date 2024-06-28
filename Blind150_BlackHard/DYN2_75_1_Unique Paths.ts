// Unique Paths
//
// https://leetcode.com/problems/unique-paths/description/

function uniquePaths(m: number, n: number): number {
  if (m < 2) return 1;

  let row = Array(n).fill(1);
  for (let j = 1; j < m; j++) {
    let tmp = Array(n);
    tmp[0] = 1;
    for (let i = 1; i < n; i++) {
      tmp[i] = row[i] + tmp[i - 1];
    }
    row = tmp;
  }

  return row[n - 1];
} // T:O(n*m) S:O(2n)
