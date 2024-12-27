// https://leetcode.com/problems/word-break/
//
// Word Break

// dp[0] = true;
// dp[end] =  dp[start] && substing[start, end) has any word
// retur dp[len]

function wordBreak(str: string, wordDict: string[]): boolean {
    const len = str.length;
    const wordSet = new Set(wordDict);

    const dp = new Array<boolean>(len + 1).fill(false);
    dp[0] = true; // base case empty string

    for (let end = 1; end <= len; end++) {
        for (let start = 0; start < end; start++) {
            if (dp[start] // check that sequense is successful
                && wordSet.has(str.substring(start, end))) { // is not included
                dp[end] = true; // mark the that sequense is successful
                break; // No need to check more splits for start
            }
        }
    }

    return dp[len];
} // T:O(n^3) S:O(n) 
