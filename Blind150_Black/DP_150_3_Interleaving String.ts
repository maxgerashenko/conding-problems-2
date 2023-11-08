// https://leetcode.com/problems/interleaving-string/description/
// Interleaving String

// Use DP 1
// but still need keep extra extra conter as true with out change
// ignore position when i or j is less than proper string
// still cover basic coner cases when s != n+m or n = 0 or m = 0
// dp[0] could be wrong
function isInterleave(s1, s2, s3) {
  const m = s1.length;
  const n = s2.length;
  if (m + n !== s3.length) return false; // conner case
  if (m === 0) return s2 === s3;
  if (n === 0) return s1 === s3;

  const dp = new Array(n + 1).fill(false); // doesn't work for 0

  dp[n] = true; // base case

  for (let j = m; j >= 0; j--)
    for (let i = n; i >= 0; i--) {
      let expect = s3[i + j];
      if (j === m && i === n) continue; // don't chage base case
      dp[i] =
        (j < m && s1[j] === expect && dp[i]) ||
        (i < n && s2[i] === expect && dp[i + 1]); // 3rd is false is set by init
    }

  return dp[0];
} // T:O(nm) S:O(n)

// Use DP 2x2
// input error s1 + s2 != s3
// use extra row and column
// calculate extra column two
// base case [m][n] === true
// don't calc [m][n]
// check i < n and j < m because don't need path when words ends
// return dp[0][0]
function isInterleave(s1, s2, s3) {
  const m = s2.length;
  const n = s1.length;
  let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(false));

  if (n + m !== s3.length) return false; // input error

  dp[m][n] = true; // base case
  for (let j = m; j >= 0; j--)
    for (let i = n; i >= 0; i--) {
      let expected = s3[j + i];
      if (j < m && expected == s2[j] && dp[j + 1][i]) {
        dp[j][i] = true;
      }
      if (i < n && expected == s1[i] && dp[j][i + 1]) {
        dp[j][i] = true;
      }
      // don't chage dp when it is [m][n]
      // others are false already
    }

  return dp[0][0];
} // T:O(nm) S:O(nm)

// use DFS
// use hashmap
// check if s1 + s2 !== s3
// base case i === after last and j === after last
//
// T:O(n*m) S:O(n*M)
function isInterleave(s1, s2, s3) {
  const n = s1.length;
  const m = s2.length;
  let hasMap = {};

  if (n + m != s3.length) return false; // error

  function dfs(i, j) {
    let key = `${i}${j}`;
    if (i === n && j === m) return true; // base case
    if (hasMap[key] != null) return hasMap[key];
    let expected = s3[i + j];

    hasMap[key] =
      (i < n && s1[i] === expected && dfs(i + 1, j)) ||
      (j < m && s2[j] === expected && dfs(i, j + 1));
    return hasMap[key];
  }

  return dfs(0, 0);
} // T:O(nm) S:O(nm)
