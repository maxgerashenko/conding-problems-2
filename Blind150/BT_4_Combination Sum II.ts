// https://leetcode.com/problems/combination-sum-ii/submissions/
// Combination Sum II

// use DFS
// use Backtraking
// if sum == target add to res
// if > target return
// sort and skipp index === index+1
// T:O(N2N + NLogN) S:O(logN)

function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  let res = [];
  let comb = [];

  function dfs(index = 0, sum = 0) {
    if (sum === target) {
      res.push([...comb]);
      return;
    } // base case
    if (index === candidates.length || sum > target) return;

    let el = candidates[index];
    comb.push(candidates[index]);
    dfs(index + 1, sum + el);

    comb.pop();
    while (index < candidates.length - 1 && el === candidates[index + 1])
      index++;
    dfs(index + 1, sum);
  }
  dfs();
  return res;
} // T:O(N2N + NlogN) S:O(logN)
