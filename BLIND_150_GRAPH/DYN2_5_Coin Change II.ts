// https://leetcode.com/problems/coin-change-ii/description/
//
// Coin Change II

// use n*m matrix
// base case 1 of 0 === 1 option;
// base vase dp[j][i] = dp[j-1][i] + dp[j][i-coin]
// symplify to dp[] and use pre

//   0 1 2 3 4 5
//   0 0 0 0 0 0 
// 1 1
// 2 1
// 5 1
function change(amount: number, coins: number[]): number {
    const len = coins.length;
    let dp = [1, ...Array(amount).fill(0)];
    let pre = Array(amount + 1).fill(0);

    for (let j = 0; j < len; j++) {
        for (let i = 1; i < amount + 1; i++) {
            let rest = i - coins[j];
            dp[i] = (dp[rest] ?? 0) + pre[i];
        }
        pre = [...dp];
    }

    return pre[amount];
}; // T:O(mn) S:O(n)