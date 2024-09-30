// https://leetcode.com/problems/coin-change/description/
//
// Coin Change

//  0 1 2 3 4 5 6 7 8
//  0 0 0 0 0 0 0 0 0
//  2 - 1 - 2 - 3 - 4
//  5 - 1 - 2 1 - 2 4
//  8 1 - - - - - - -

// bottom up solution
// sum of 0 with 1 coin
// sum of target with all couns
function coinChange(coins: number[], amount: number): number {
    let len = coins.length;
    coins.sort((a, b) => a - b);
    const dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 coins are needed to make amount 0
  
    for (let coin of coins)
      for (let num = coin; num < amount + 1; num++) {
        if (dp[num - coin] === Infinity) continue; // Base case:
        dp[num] = Math.min(dp[num], dp[num - coin] + 1);
      }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  } // T:O(nm) S:O(n)
  