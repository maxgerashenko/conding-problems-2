// https://leetcode.com/problems/longest-common-subsequence/description/
//
// Longest Common Subsequence


//     a b 
//.  0 0 0
// c 0 0 0
// b 0 0 1
function longestCommonSubsequence(text1: string, text2: string): number {
    const len1 = text1.length;
    const len2 = text2.length;

    const dp = Array(len2 + 1).fill(null).map(() => Array(len1 + 1).fill(0));

    for (let j = 1; j < len2 + 1; j++) {
        for (let i = 1; i < len1 + 1; i++) {
            let isMatch = text2[j - 1] == text1[i - 1];
            dp[j][i] = isMatch
                ? 1 + dp[j - 1][i - 1]
                : Math.max(dp[j - 1][i], dp[j][i - 1]);
        }
    }

    return dp[len2][len1];
}; // T:O(mn) S:O(mn)
