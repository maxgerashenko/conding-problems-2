// https://leetcode.com/problems/surrounded-regions/
// Surrounded Regions

// Use DFS
// Use 2 DFS
// Reverse thinging
// Check all border elements and mark as 'B'
// don't revisit 'B'
// dfs neighbors
// 2nd DFS mark all not 'B' as 'X'
// ignore out of borders
// T:O(NM) S:O(MN)

function solve(board: string[][]): void {
  let m = board.length;
  let n = board[0].length;

  function dfs(j, i) {
    if (j < 0 || i < 0 || j === m || i === n || board[j][i] !== 'O') return;

    board[j][i] = 'B';
    dfs(j + 1, i);
    dfs(j - 1, i);
    dfs(j, i + 1);
    dfs(j, i - 1);
  }

  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      if (board[j][i] !== 'O') continue;
      if (j == 0 || j === m - 1 || i === 0 || i === n - 1) {
        dfs(j, i);
      }
    }
  }

  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      board[j][i] = board[j][i] === 'B' ? 'O' : 'X';
    }
  }
} // T:O(2MN) S:O(MN)
