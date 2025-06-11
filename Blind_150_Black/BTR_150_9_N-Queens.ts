// https://leetcode.com/problems/n-queens/submissions/
// N-Queens

// use dfs
// use backtack
// use set for col, rol, pos and neg dialog
// pos = i - j
// negative = i + j
// T:O(!N) S:O(N)

function solveNQueens(n: number): string[][] {
  const res = [];
  const cols = new Set();
  const rows = new Set();
  const posDiag = new Set();
  const negDiag = new Set();
  const cur = [];
  const pos = (i) => {
    let line = new Array(n).fill('.');
    line[i] = 'Q';
    return line.join('');
  };
  function dfs(j = 0) {
    if (j === n) {
      res.push([...cur]);
      return;
    }

    for (let i = 0; i < n; i++) {
      if (
        cols.has(i) ||
        rows.has(j) ||
        posDiag.has(j - i) ||
        negDiag.has(i + j)
      )
        continue;

      cols.add(i);
      rows.add(j);
      posDiag.add(j - i);
      negDiag.add(i + j);
      cur.push(pos(i));
      dfs(j + 1);
      cur.pop();
      cols.delete(i);
      rows.delete(j);
      posDiag.delete(j - i);
      negDiag.delete(i + j);
    }
  }
  dfs();

  return res;
} // T:O(!N) S:O(n^2)
