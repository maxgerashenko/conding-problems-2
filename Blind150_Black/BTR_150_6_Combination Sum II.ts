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
  const res = [];
  let n = candidates.length;
  candidates.sort((a, b) => a - b); // for duplicates 2^N
  let visited = new Set();

  function dfs(index = 0, comb = [], sum = 0) {
    if (sum === target) {
      res.push([...comb]);
      return;
    }
    if (sum > target) return;
    if (index === n) return;

    let num = candidates[index];
    comb.push(num);
    dfs(index + 1, comb, sum + num); // B case add
    comb.pop(); // backtrack

    while (candidates[index] === candidates[index + 1]) {
      index++;
    } // remove duplicates
    dfs(index + 1, comb, sum); // A case don't add
  }
  dfs();

  return res;
} // T:O(NlognN + 2^N) S:O(2^N*N/2)
