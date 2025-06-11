// https://leetcode.com/problems/target-sum/description/
// Target Sum

// Brute force is dfs 2^n
// Use hashMapCount wher key is (i,total) and value us count
// when i = is last return 1 when total === target otherwise return 0
// NOT T:O(2^N) s:O(n) as brute forse
// T:O(n*2sum(nums)) S:O(n) as call stack

function findTargetSumWays(nums: number[], target: number): number {
  let hashMapIndex = {};
  let n = nums.length;

  function dfs(i = 0, total = 0) {
    if (i === n) return total === target ? 1 : 0; // base case
    return dfs(i + 1, total + nums[i]) + dfs(i + 1, total - nums[i]);
  }

  return dfs();
} // not 2^n as regular dfs
// T:O(n*2*sum(n)) S:O(n)
// n for every nums and 2 sum for -5 + 5 if every num is 1
