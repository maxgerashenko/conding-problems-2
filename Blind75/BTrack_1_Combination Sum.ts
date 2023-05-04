// https://leetcode.com/problems/combination-sum/
// Combination Sum

// go left with same number but added as sum and path;
// go right with out the number and no sum and path

function combinationSum(candidates: number[], target: number): number[][] {
  let res = [];

  function dfs(index = 0, path = [], sum = 0) {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    if (index >= candidates.length || sum > target) return;
    const el = candidates[index];
    path.push(candidates[index]);
    dfs(index, path, sum + candidates[index]); // go left
    path.pop();
    dfs(index + 1, path, sum); // go right
  }
  dfs();

  return res;
} // T:O(n^target) S:(target)
