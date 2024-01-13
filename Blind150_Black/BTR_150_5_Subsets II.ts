// https://leetcode.com/problems/subsets-ii/submissions/
// Subsets II

// Use BackTracking
// use dfsss
// use btr for single combination
// collect combination in res []
// sort numbers to find duplicates
// left branch add number
// right branch don't add number
// for not adding skip similar numbers
// use while to skip numbers
// T:O(nlogNn * 2^N) S:O(N*2^N)

// sort
// add first
// skip next

function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res = [];
  const len = nums.length;
  const cur = [];

  function dfs(index) {
    if (index === len) {
      res.push([...cur]);
      return;
    }
    const num = nums[index];

    cur.push(num);
    dfs(index + 1);
    cur.pop();

    while (index < len && nums[index] === nums[index + 1]) {
      index++;
    }

    dfs(index + 1);
  }

  dfs(0);

  return res;
} // T:O(nlogn+2^n*n) S:O(n)
