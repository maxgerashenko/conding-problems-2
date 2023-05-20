// Unique Paths
// https://leetcode.com/problems/unique-paths/

// reverse order
// use one line dp
// set outer bounce as 0

function uniquePaths(m: number, n: number): number {
  const dp = new Array(n + 1).fill(0);
  dp[n - 1] = 1;

  for (let j = m - 1; j >= 0; j--)
    for (let i = n - 1; i >= 0; i--) {
      if (j === m - 1 && i === n - 1) continue;
      dp[i] = dp[i] + dp[i + 1];
    }

  return dp[0];
} // T:O(mn) S:O(n)
