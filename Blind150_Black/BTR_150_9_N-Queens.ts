// https://leetcode.com/problems/n-queens/submissions/
// N-Queens

// use dfs
// use backtack
// use set for col, rol, pos and neg dialog
// pos = i - j
// negative = i + j
// S:O(!N) S:O(N)

function solveNQueens(n: number): string[][] {
  let res = [];
  let comb = [];
  let row = new Set();
  let col = new Set();
  let pos = new Set();
  let neg = new Set();

  function dfs(j = 0) {
    if (j === n) {
      res.push([...comb]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (row.has(i) || col.has(j) || pos.has(j - i) || neg.has(j + i))
        continue;
      let base = Array(n).fill('.');
      base[i] = 'Q';
      row.add(i);
      col.add(j);
      pos.add(j - i);
      neg.add(j + i);
      comb.push(base.join(''));
      dfs(j + 1);
      comb.pop();
      row.delete(i);
      col.delete(j);
      pos.delete(j - i);
      neg.delete(j + i);
    }
  }
  dfs();

  return res;
} // T:O(!N) S:O(N)
