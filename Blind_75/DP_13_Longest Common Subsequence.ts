// Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/

// DP
// If match 1 max from both max in matrix
// if not take max from prev right of down in Matrix
// pre set all outbound indexes to 0;

function longestCommonSubsequence(text1: string, text2: string): number {
  let dp = new Array(text2.length + 1).fill(
    new Array(text1.length + 1).fill(0)
  );

  for (let j = text2.length - 1; j >= 0; j--)
    for (let i = text1.length - 1; i >= 0; i--) {
      if (text2[j] === text1[i]) {
        dp[j][i] = 1 + dp[j + 1][i + 1];
        continue;
      }
      dp[j][i] = Math.max(dp[j + 1][i], dp[j][i + 1]);
    }

  return dp[0][0];
} // T:O(N*M) S:O(N*M)
