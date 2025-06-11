// https://leetcode.com/problems/edit-distance/description/
//
// Edit Distance

// j is target
// i is string
//     s t r
//   0 1 2 3  
// t 1
// r 2
// g 3
// left to delete
// top to insert

function minDistance(str: string, targ: string): number {
    const lenS = str.length;
    const letT = targ.length;
    const dp = Array(letT + 1).fill(0).map(() => Array(lenS + 1).fill(0));

    dp[0] = dp[0].map((el, i) => i); // insert steps
    for (let j = 1; j < letT + 1; j++) {
        dp[j][0] = j; // delete steps
    }

    for (let j = 1; j < letT + 1; j++) {
        for (let i = 1; i < lenS + 1; i++) {
            dp[j][i] = targ[j - 1] === str[i - 1]
                ? dp[j - 1][i - 1] // no step
                : Math.min(
                    dp[j][i - 1], // delete
                    dp[j - 1][i - 1], // replace
                    dp[j - 1][i] // insert
                ) + 1 // one step
        }
    }

    return dp[letT][lenS];
}; // T:O(n*m) S:O(n*m)





// Optimized
// S:O(min(n,m));
// matring to array
// pre[0] = j number to delete
function minDistance(word1: string, word2: string): number {
    if (word1.length > word2.length) {
        [word1, word2] = [word2, word1];
    }
    const len1 = word1.length;
    const len2 = word2.length;
    let dp = Array(len1 + 1).fill(0);
    let pre = Array(len1 + 1).fill(0).map((el, i) => i);
    for (let j = 1; j < len2 + 1; j++) {
        pre[0] = j; // set insert/delete value for the row
        for (let i = 1; i < len1 + 1; i++) {
            dp[i] = word2[j - 1] === word1[i - 1]
                ? pre[i - 1] // no step
                : Math.min(
                    dp[i - 1], // delete
                    pre[i - 1], // replace
                    pre[i] // insert
                ) + 1 // one step
        }
        pre = [...dp];
    }

    return pre[len1];
}; // T:O(n*m) S:O(Min(n,m))