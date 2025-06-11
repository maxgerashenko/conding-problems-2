// https://leetcode.com/problems/longest-common-subsequence/description/
// Longest Common Subsequence

// use DP
// use matrix n*m
// when text1 === text2 use diagonal value + 1
// else Math.max of j+1,i or j,i+1, values without this letters
// add rows with 0 to the right and bellow
// return dp[0][0]
//
// T:O(n*m) S:(n*m)

var longestCommonSubsequence = function (text1, text2) {
  let n = text1.length;
  let m = text2.length;
  let dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  for (let j = m - 1; j >= 0; j--)
    for (let i = n - 1; i >= 0; i--) {
      dp[j][i] =
        text2[j] === text1[i]
          ? dp[j + 1][i + 1] + 1
          : Math.max(dp[j + 1][i], dp[j][i + 1]);
    }

  return dp[0][0];
}; // T:(N*M) S:O(N*M)
