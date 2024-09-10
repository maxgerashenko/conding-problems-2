// https://leetcode.com/problems/regular-expression-matching/description/
//
// Regular Expression Matching


// dfs of posible combinations
// cache of indexes
// both finished true
// patter finish false
// if match but pI is not finished
function isMatch(str: string, pat: string): boolean {
    const sLen = str.length;
    const pLen = pat.length;
    const dp = {};

    function dfs(
        sI = 0,
        pI = 0,
        key = `${sI}${pI}`,
        isNextMany = pat[pI + 1] === '*',
        isMatch = str[sI] === pat[pI] || pat[pI] === '.') {

        if (key in dp) return dp[key]; // cache
        if (sI >= sLen && pI >= pLen) return true; // base case
        if (pI >= pLen) return false; // conner caes

        if (isNextMany) {
            if (sI < sLen && isMatch) {
                dp[key] = dfs(sI + 1, pI) || dfs(sI + 1, pI + 2) || dfs(sI, pI + 2);
                return dp[key];
            } // only if sI is finished
            dp[key] = dfs(sI, pI + 2); // but pI is not finished
            return dp[key];
        }

        if (sI < sLen && isMatch) {
            dp[key] = dfs(sI + 1, pI + 1);
            return dp[key];
        }
        return false;
    }

    return dfs();
}; // T:O(N) S:O(N)