// https://leetcode.com/problems/regular-expression-matching/
// Regular Expression Matching

// Use DFS + Cache
// 2^n as add or not add
// but add 2 diffrent options
// with * or without
// with i+1, j || i, j+2
// if not * when match add i+1, j+1
// use cache before return

function isMatch(str: string, patrn: string): boolean {
  let dp = {};
  let n1 = str.length;
  let n2 = patrn.length;

  function dfs(s = 0, p = 0) {
    if (dp[s + ',' + p] != null) return dp[s + ',' + p]; // cache
    if (s >= n1 && p >= n2) return true; // base case
    if (p >= n2) return false; // no pattern,  base case

    let match = s < n1 && (str[s] === patrn[p] || patrn[p] == '.');

    if (p + 1 < n2 && patrn[p + 1] === '*') {
      dp[s + ',' + p] = (match && dfs(s + 1, p)) || dfs(s, p + 2);
      return dp[s + ',' + p];
    }
    dp[s + ',' + p] = match && dfs(s + 1, p + 1);
    return dp[s + ',' + p];
  }

  return dfs();
} // T:O(2^N) S:O(N^2)
