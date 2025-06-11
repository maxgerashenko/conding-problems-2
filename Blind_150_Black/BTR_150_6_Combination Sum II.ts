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

// sort + while
// add first

function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const res = [];
  const cur = [];
  const len = candidates.length;

  function dfs(index, rest) {
    if (rest === 0) {
      res.push([...cur]);
      return;
    }
    if (index === len || rest < 0) return;
    const el = candidates[index];

    cur.push(el);
    dfs(index + 1, rest - el);
    cur.pop();

    while (index < len && candidates[index] === candidates[index + 1]) {
      index++;
    }

    dfs(index + 1, rest);
  }

  dfs(0, target);

  return res;
} // T:O(2^n*n) S:O(n)
