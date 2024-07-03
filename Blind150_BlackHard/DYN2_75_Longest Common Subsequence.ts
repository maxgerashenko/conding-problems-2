// Longest Common Subsequence
//
// https://leetcode.com/problems/longest-common-subsequence/description/

function longestCommonSubsequence(text1: string, text2: string): number {
  let n = text1.length;
  let m = text2.length;
  let dp = Array(m + 1)
    .fill(null)
    .map((row) => Array(n + 1).fill(0));

  for (let j = m - 1; j >= 0; j--) {
    for (let i = n - 1; i >= 0; i--) {
      dp[j][i] =
        text1[i] === text2[j]
          ? dp[j + 1][i + 1] + 1
          : Math.max(dp[j + 1][i], dp[j][i + 1]);
    }
  }

  return dp[0][0];
} // T:O(n*m) S:O(n*m)
