// https://leetcode.com/problems/unique-paths-ii/
// Unique Paths II

// DP
// Reversed order
// one line
// add n+1 to be 0

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(n + 1).fill(0);
  dp[n - 1] = 1;
  for (let j = m - 1; j >= 0; j--)
    for (let i = n - 1; i >= 0; i--) {
      if (j === m - 1 && i === n - 1) continue;
      if (obstacleGrid[j][i] === 1) {
        dp[i] = 0;
        continue;
      }
      dp[i] = dp[i] + dp[i + 1];
    }
  return dp[0];
} // T:O(mn) S:O(n)
