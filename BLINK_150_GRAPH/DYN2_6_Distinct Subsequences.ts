// https://leetcode.com/problems/distinct-subsequences/
//
// Distinct Subsequences

function numDistinct(str: string, tar: string): number {
    const lenS = str.length;
    const lenT = tar.length;
    const hashMapKey = {};

    function dfs(s = 0, t = 0) {
        if (t === lenT) return 1;
        if (s === lenS) return 0;

        const key = `${s},${t}`;

        if (key in hashMapKey) return hashMapKey[key];

        if (str[s] === tar[t]) {
            hashMapKey[key] = dfs(s + 1, t + 1) + dfs(s + 1, t);
            return hashMapKey[key];
        }

        return dfs(s + 1, t);
    }

    return dfs();
}; // T:O(m*n) S:O(m*n)

function numDistinct(str: string, targ: string): number {
    const lenS = str.length;
    const lenT = targ.length;
    let dp = Array(lenT + 1).fill(0);
    dp[0] = 1;

    for (let s = 1; s <= lenS; s++)
        for (let t = lenT; t > 0; t--) {
            if (str[s - 1] === targ[t - 1]) {
                dp[t] += dp[t - 1];
            }
        }

    return dp[lenT];
}; // T:O(mn) S:O(n)