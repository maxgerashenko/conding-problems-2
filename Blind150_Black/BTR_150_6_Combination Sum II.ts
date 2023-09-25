// Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/solutions/

// use DFS
// use Backtracking
// use sort to avoid dulicates
// use add A
// use don't add B
// use add first to allow numbers duplicates
// use while index === index + 1 index++ to avoid comb duplicates
// use not add second
// T:O(nlogn + 2^n) S:(2^N*N) comb * average length

function combinationSum2(candidates: number[], target: number): number[][] {
  let res = [];
  let comb = [];
  let n = candidates.length;

  // sort to remove detect duplicates
  candidates.sort((a, b) => a - b);

  function dfs(index = 0, sum = 0) {
    if (sum > target) return;
    if (sum === target) {
      res.push([...comb]);
      return;
    }
    if (index === n) return;

    // add branch
    let num = candidates[index];
    comb.push(num);
    dfs(index + 1, sum + num);
    comb.pop();

    // skip duplicates after first run
    while (candidates[index] === candidates[index + 1]) index++;
    // not add branch
    dfs(index + 1, sum);
  }
  dfs();

  return res;
} // T:O(NlogN + 2^N) S:O(2^N*N)
