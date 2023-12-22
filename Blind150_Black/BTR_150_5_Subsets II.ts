// https://leetcode.com/problems/subsets-ii/submissions/
// Subsets II

// Use BackTracking
// use dfs
// use btr for single combination
// collect combination in res []
// sort numbers to find duplicates
// left branch add number
// right branch don't add number
// for not adding skip similar numbers
// use while to skip numbers
// T:O(nlogNn * 2^N) S:O(N*2^N)

function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // to prevent duplicates
  let res = [];
  let n = nums.length;

  let cur = [];
  function dfs(index = 0) {
    if (index === n) {
      res.push([...cur]);
      return;
    }
    cur.push(nums[index]);
    dfs(index + 1); // allow duplicates
    cur.pop();

    while (index < n && nums[index] === nums[index + 1]) index++; // skip duplicates
    dfs(index + 1);
  }

  dfs();
  return res;
} // T:O(n*logn*2^n) S:O(2^N)// T:O(N*logN+2^N) S:O(N*2^N)

// use recursion
// sort array, to exclude duplicatates
// use start point to cacl fresh comb when i === i+1
//
function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let res = [[]];
  let preLength = 0;

  function dfs(index = 0) {
    if (index === nums.length) return;
    let num = nums[index];
    let n = res.length;
    let i = num === nums[index - 1] ? preLength : 0;
    for (i; i < n; i++) {
      let el = res[i];
      res.push([...el, num]);
    }
    preLength = n;
    dfs(index + 1);
  }
  dfs();

  return res;
} // T:O(N*logN+2^N) S:O(N*2^N)
