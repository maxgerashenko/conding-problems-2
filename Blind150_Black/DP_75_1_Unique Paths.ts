// https://leetcode.com/problems/unique-paths/description/
// Unique Paths

// USE DP
// use first line as all 1s
// skip first line
// get left and top sum to get all paths
//
// T:O(n*m) S:O(n)

function uniquePaths(m: number, n: number): number {
  let dp = new Array(n).fill(1);

  for (let j = 1; j < m; j++)
    for (let i = 0; i < n; i++) {
      let left = dp[i - 1] || 0;
      let top = dp[i];
      dp[i] = left + top;
    }

  return dp[n - 1];
} // T:O(nm) S:(n)
