// https://leetcode.com/problems/distinct-subsequences/description/
// Distinct Subsequences

// use DFS
// use hasmap
// use i and j
// base case is the end of one or another
// calculate use and not use OR skip as not match
//
// T:O(S*P) S:O(S*P)

function numDistinct(string: string, pattern: string): number {
  let s = string.length;
  let p = pattern.length;
  let hashMap = {};

  function dfs(i, j) {
    if (j === p) return 1;
    if (i === s) return 0;
    let key = `${j},${i}`;

    if (key in hashMap) return hashMap[key];

    hashMap[key] =
      string[i] === pattern[j]
        ? dfs(i + 1, j + 1) + dfs(i + 1, j)
        : dfs(i + 1, j);
    return hashMap[key];
  }

  return dfs(0, 0);
} // T:O(nm) S:O(nm)
