// https://leetcode.com/problems/burst-balloons/description/
// Burst Balloons

// Use DP
// Use dfs
// use hashmap
// use birst first is 2^N complexity as n-1 * n^2 permutations
// NOT birst fist is N*N^2 combinations n-1 * conbinations
// at the end  1 * one el * 1, so need [L-1] * i * [R+1]
// + dfs(inside he 2 ranges)
//
// T:O(n^3) S:O(n^2)

function maxCoins(nums: number[]): number {
  let coins = [1, ...nums, 1]; // extend for
  let n = coins.length;
  let dp = {};

  function dfs(l, r) {
    let key = `${l},${r}`;
    if (l > r) return 0;
    if (key in dp) return dp[key];

    let tmp = 0;
    for (let i = l; i <= r; i++) {
      let res = coins[l - 1] * coins[i] * coins[r + 1];
      res += dfs(l, i - 1) + dfs(i + 1, r);
      tmp = Math.max(tmp, res);
    }

    dp[key] = tmp;
    return dp[key];
  }

  return dfs(1, n - 2);
} // T:O(N^3) S:O(N^2)
