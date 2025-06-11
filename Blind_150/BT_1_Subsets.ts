// https://leetcode.com/problems/subsets/
// Subsets

// For Subsers Use Backtracking
// use dfs
// Add dfs remove dfs
// use global result
// stack hight logN
// T:O(N*2^N) S:O(LogN)

function subsets(nums: number[]): number[][] {
  let res = [];

  let subset = [];
  function dfs(index = 0) {
    if (index >= nums.length) {
      res.push([...subset]);
      return;
    } // base case

    subset.push(nums[index]);
    dfs(index + 1);
    subset.pop();

    dfs(index + 1);
  }
  dfs();

  return res;
} // T:O(N2^N) S:O(LogN) // stack hight logN
