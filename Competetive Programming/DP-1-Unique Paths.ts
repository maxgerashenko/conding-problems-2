// #2

// https://leetcode.com/problems/unique-paths/
// https://rixong.medium.com/unique-paths-algorithm-e5834962b687

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  // Constraints
  // 1 <= m.n <= 100

  // Use DP matrix
  // n - j - rows
  // m - i - cols
  // first row is always 1 path
  // first coll is always 1 path
  // other cells are sum of top and left
  // last element is the answer

  let dp = [];

  for (let j = 0; j < m; j++) {
    dp.push([]);
    for (let i = 0; i < n; i++) {
      if (j === 0 || i === 0) {
        dp[j][i] = 1;
        continue;
      }

      let top = dp[j - 1][i];
      let left = dp[j][i - 1];
      dp[j][i] = top + left;
    } // O(n)
  } // O(n^2)

  return dp[m - 1][n - 1];
};
