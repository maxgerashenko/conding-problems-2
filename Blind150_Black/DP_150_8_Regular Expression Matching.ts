// https://leetcode.com/problems/regular-expression-matching/
// Regular Expression Matching

// use DP
//
// use dfs
// use hashMap
// it is regular
// only .* or a* gives 2 options
// get next i+1, j
// take 0 of * i,j+2
// base case true, i = n && j == m
// base case false j>=m when i is not end
// conner case .* and i is already out
// conner case take j+2 first to avoid the loop
//
// T:O(m*n) S:O(m*n+n+m)

function isMatch(str: string, pat: string): boolean {
  const dp = {};
  let n = str.length;
  let m = pat.length;

  function dfs(i, j) {
    let key = `${i}${j}`;
    if (key in dp) return dp[key];
    if (i == n && j >= m) return true;
    if (j >= m) return false;

    if (pat[j + 1] === '*') {
      if ((pat[j] === '.' || str[i] === pat[j]) && i < n) {
        dp[key] = dfs(i, j + 2) || dfs(i + 1, j);
        return dp[key];
      }
      dp[key] = dfs(i, j + 2);
      return dp[key];
    }
    if (str[i] === pat[j] || pat[j] === '.') {
      dp[key] = dfs(i + 1, j + 1);
      return dp[key];
    }

    dp[key] = false;
    return dp[key];
  }

  return dfs(0, 0);
} //T:O(m*n) S:O(n*m + n+m)
