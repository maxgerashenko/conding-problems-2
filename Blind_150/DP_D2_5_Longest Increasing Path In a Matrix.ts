// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/
// Longest Increasing Path in a Matrix

// use DFS + CACHE
// use DP
// use dir 1,0 -1,0 0,1 0,1
// use for for start from each postion
// chache each position resulst
// return preCount + cached
// but return max(1, dfs(1 + dfs(preCount)));
// store localMax and Max
// cache value before return

function longestIncreasingPath(matrix: number[][]): number {
  let max = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = Array(m).fill(null);
  dp = dp.map((el) => Array(n).fill(null));
  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(j = 0, i = 0, count = 0) {
    if (dp[j][i] != null) return dp[j][i] + count; // use cache
    let localMax = 1;
    for (let [dj, di] of dirs) {
      let cj = j + dj;
      let ci = i + di;
      if (cj < 0 || cj >= m || ci < 0 || ci >= n) continue;
      if (matrix[j][i] >= matrix[cj][ci]) continue;
      localMax = Math.max(localMax, 1 + dfs(cj, ci, count)); // max of 4
    }
    dp[j][i] = localMax; // cache
    max = Math.max(max, localMax);
    return localMax; // base case;
  }

  for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) dfs(j, i);

  return max;
} // T:O(m*n) S:O(m*n)
