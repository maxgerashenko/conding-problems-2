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
  const cur = [];
  let colsSet = new Set();
  let rowsSet = new Set();
  let positiveDiagonalSet = new Set();
  let negativeDiagonalSet = new Set();
  let toString = (i) => {
    let str = new Array(n).fill('.');
    str[i] = 'Q';
    return str.join('');
  };

  function dfs(j) {
    if (cur.length === n) {
      res.push([...cur]);
      return;
    }
    if (j === n) return;

    for (let i = 0; i < n; i++) {
      if (
        colsSet.has(j) ||
        rowsSet.has(i) ||
        positiveDiagonalSet.has(j - i) ||
        negativeDiagonalSet.has(j + i)
      )
        continue;

      cur.push(toString(i));
      colsSet.add(j);
      rowsSet.add(i);
      positiveDiagonalSet.add(j - i);
      negativeDiagonalSet.add(j + i);
      dfs(j + 1);
      colsSet.delete(j);
      rowsSet.delete(i);
      positiveDiagonalSet.delete(j - i);
      negativeDiagonalSet.delete(j + i);
      cur.pop();
    }
  }

  dfs(0);

  return res;
} // T:O(!n) S:O(n^2)
