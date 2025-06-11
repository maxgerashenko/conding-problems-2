// https://leetcode.com/problems/subsets-ii/
// Subsets II

// Use dfs
// use backtraking
// use sorting to avoid duplicates
// add element
// and don't add element
// before not adding skipp all duplicates
// T:O(N2^N + NlogN) S:O(logN)

function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // sort to avoid duplicates

  let res = [];
  function dfs(index = 0, subset = []) {
    if (index === nums.length) {
      res.push([...subset]); // base case
      return;
    }

    let el = nums[index];
    subset.push(el);
    dfs(index + 1, subset);

    subset.pop();
    while (index < nums.length - 1 && el === nums[index + 1]) index++;
    dfs(index + 1, subset);
  }
  dfs();

  return res;
} // T:O(N 2^N + NlogN) S:O(LogN)
