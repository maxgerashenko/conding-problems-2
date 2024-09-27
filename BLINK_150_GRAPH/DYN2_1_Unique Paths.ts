// https://leetcode.com/problems/unique-paths/
//
// Unique Paths

function uniquePaths(m: number, n: number): number {
    if (n > m) {
        [m, n] = [n, m];
    }

    let dp = Array(n).fill(1); // pre

    for (let j = 1; j < m; j++) {
        for (let i = 1; i < n; i++) {
            dp[i] += dp[i - 1];
        }
    }

    return dp[n-1];
}; // T:O(mn) S:O(Min(n,m))