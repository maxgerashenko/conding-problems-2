// Distinct Subsequences
//
// https://leetcode.com/problems/distinct-subsequences/submissions/1312171222/


function numDistinct(str1: string, str2: string): number {
    let n = str1.length;
    let m = str2.length;
    let pre = Array(n + 1).fill(1);
    let dp = Array(n + 1).fill(0);

    for (let j = 0; j < m; j++) {
        for (let i = 1; i < n + 1; i++) {
            dp[i] = str1[i - 1] === str2[j]
                ? pre[i - 1] + dp[i - 1]
                : dp[i - 1]
        }
        pre = [...dp];
    }

    return dp[n];
};  // T:O(n*m) S:O(n)