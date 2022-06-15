// #1

// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const dp = [];

  // init the array
  for (let i = 0; i < grid.length; i++) {
    dp.push([]);
  }

  // init first value
  dp[0][0] = grid[0][0];

  // SEPARATE CONER CASES

  // init first row
  for (let i = 1; i < grid.length; i++) {
    dp[i][0] = grid[i][0] + dp[i - 1][0];
  }

  // init first col
  for (let i = 1; i < grid[0].length; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }

  for (let j = 1; j < grid.length; j++) {
    for (let i = 1; i < grid[0].length; i++) {
      dp[j][i] = grid[j][i] + Math.min(dp[j][i - 1], dp[j - 1][i]);
    }
  }

  // console.log(JSON.stringify(dp, null, 2));
  return dp[grid.length - 1][grid[0].length - 1];
};
