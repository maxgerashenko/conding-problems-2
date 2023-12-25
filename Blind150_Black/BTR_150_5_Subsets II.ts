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

function combinationSum2(candidates: number[], target: number): number[][] {
  const res = [];
  const n = candidates.length;
  const cur = [];

  candidates.sort((a, b) => a - b); // for duplicates

  function dfs(index = 0, rest = target) {
    if (rest === 0) {
      res.push([...cur]);
      return;
    }
    if (rest < 0 || index === n) return;

    let el = candidates[index];
    cur.push(el);
    dfs(index + 1, rest - el);
    cur.pop();

    while (index < n && candidates[index + 1] === candidates[index]) index++; // duplicates

    dfs(index + 1, rest);
  }

  dfs();
  return res;
} // T:O(nlogn) S:O(n)

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
