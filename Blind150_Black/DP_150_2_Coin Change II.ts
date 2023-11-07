// https://leetcode.com/problems/coin-change-ii/
// Coin Change II

// Better DP solution
// use DP matrix
// with 1 row
// check bottom 1 step
// and left amount steps
// as X use amoints for 0...target
// as Y use 1 coin, next 1+2coins, next 1+2+3 coins
// don't need 2row as cans use current row as prev
// when look back not just one step but cur i - coin value
// then when i - coin value = 0, index 0 should be 1 as 1 coin could be used
// reserv 1 value for the i=0 position
// travesr amoun array as coins times
// and return last coin value
//
// T:O(amount*n) S:O(n)

var changeDP = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let el of coins)
    for (let i = 1; i <= amount; i++) dp[i] = (dp[i - el] || 0) + dp[i];

  return dp[amount];
}; // T:O(N*amout) S:O(N)

// DFS + hashMap
// return 1 when is target
// return 0 when not target
// take the same count
// or take another coin
// hash result
//
// T:O(n*target) S:O(n*target)

var change = function (target, coins) {
  let hashMap = {};
  let n = coins.length;

  function dfs(index, count, sum) {
    if (hashMap[`${index},${sum}`] != null) return hashMap[`${index},${sum}`]; // cash

    if (sum < 0 || index > n - 1) return 0; // conner case
    if (sum === 0) return 1;

    hashMap[`${index},${sum}`] =
      dfs(index, count + 1, sum - coins[index]) + dfs(index + 1, count, sum);

    return hashMap[`${index},${sum}`];
  }

  return dfs(0, 0, target);
}; // T:O(N*target) S:(N*target)
