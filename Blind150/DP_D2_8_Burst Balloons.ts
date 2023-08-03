// Burst Balloons
// https://leetcode.com/problems/burst-balloons/

// use DP
// use DFS + cache
// reversed logic
// find not the first but last
// add dummy nodes 1 + ... + 1
// iterate the range
// use l and r to narrow the selection
// cur last coins = l-1 * i r+1
// rest is l,i-1 + i+1,r
// return maxLocal on each level
// each level is n^2 and n time for each i
// T:O(N^3) S:O(N^2)

function maxCoins(nums: number[]): number {
  let dp = {};
  let extNums = [1, ...nums, 1];
  let n = extNums.length;

  function dfs(l = 1, r = n - 2) {
    if (l > r) return 0; // conner case
    if (l + ',' + r in dp) return dp[l + ',' + r]; // cache

    dp[l + ',' + r] = 0;
    for (let i = l; i <= r; i++) {
      let coins =
        extNums[l - 1] * extNums[i] * extNums[r + 1] +
        dfs(l, i - 1) +
        dfs(i + 1, r);
      dp[l + ',' + r] = Math.max(dp[l + ',' + r], coins);
    }
    return dp[l + ',' + r];
  }

  return dfs();
} // T:O(n^3) S:O(n^2)
