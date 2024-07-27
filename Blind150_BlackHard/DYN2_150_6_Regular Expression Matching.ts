// Regular Expression Matching
//
// https://leetcode.com/problems/regular-expression-matching/description/

// critical case when i is at the end but patern is not yet but should be true
function isMatch(str: string, pat: string): boolean {
  let n = str.length;
  let m = pat.length;
  let dp = {};

  function dfs(i, j) {
    let key = i + ', ' + j;
    if (key in dp) return dp[key];

    if (i >= n && j >= m) return true;
    if (j >= m) return false;

    let isMatch = i < n && (str[i] === pat[j] || pat[j] === '.');
    if (j + 1 < m && pat[j + 1] === '*') {
      if (isMatch) {
        dp[key] = dfs(i, j + 2) || dfs(i + 1, j);
        return dp[key];
      }
      dp[key] = dfs(i, j + 2);
      return dp[key];
    }
    if (isMatch) {
      dp[key] = dfs(i + 1, j + 1);
      return dp[key];
    }
    return false;
  }
  return dfs(0, 0);
} // T:O(max(n,m)) S:O(n);
