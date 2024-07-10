// Regular Expression Matching
//
// https://leetcode.com/problems/regular-expression-matching/description/

// critical case when i is at the end but patern is not yet but should be true
function isMatch(s: string, p: string): boolean {
  let n = s.length;
  let m = p.length;
  let dp = {};

  function dfs(i = 0, j = 0) {
    let key = i + ',' + j;
    if (key in dp) return dp[key]; // cach

    if (i >= n && j >= m) return true; // base case - all good
    if (j >= m) return false; // base case - not match in pattern

    let isMatch = s[i] === p[j] || p[j] === '.';
    if (p[j + 1] === '*') {
      if (i < n && isMatch) {
        dp[key] = dfs(i + 1, j) || dfs(i, j + 2); // base case
        return dp[key];
      }
      dp[key] = dfs(i, j + 2); // conner case - ignore * and finish pattern
      return dp[key];
    }
    if (i < n && isMatch) {
      dp[key] = dfs(i + 1, j + 1); // base case
      return dp[key];
    }
    return false;
  }

  return dfs();
} // T:O(N) S:O(N);
