// https://leetcode.com/problems/distinct-subsequences/submissions/
// Distinct Subsequences

// Use dp s.length x t.length
// base case if second is emtpy return 1
// base case if first is empty return 0
// iterate when [i1+1] === [i2+1] ? [i1+1] [i2+1] + [i1+1, i2]
// else just  [i1+1, i2]

function numDistinct(s: string, t: string): number {
  let n1 = s.length;
  let n2 = t.length;
  let dp = {};

  function dfs(i1 = 0, i2 = 0) {
    if (i2 === n2) return 1; // base case
    if (i1 === n1) return 0; // base case
    if (i1 + ',' + i2 in dp) return dp[i1 + ',' + i2]; // cached

    dp[i1 + ',' + i2] = s[i1] === t[i2] ? dfs(i1 + 1, i2 + 1) : 0;
    dp[i1 + ',' + i2] += dfs(i1 + 1, i2);
    return dp[i1 + ',' + i2]; // cached
  }

  return dfs();
} // T:O(n1*n2) S:O(n1*n2)
