// https://leetcode.com/problems/word-search/description/
// Word Search

// check boundaries
// add/remove visited once before/after dfs
//
// T:O(M*N*4^w)

function exist(board: string[][], word: string): boolean {
  const visited = new Set();
  const colsLen = board[0].length;
  const rowsLen = board.length;
  const wLen = word.length;
  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(j, i, index) {
    if (index === wLen) return true;
    if (j < 0 || j >= rowsLen || i < 0 || i >= colsLen) return false;
    let key = `${j},${i}`;
    if (board[j][i] !== word[index] || visited.has(key)) return false;
    visited.add(key);

    for (let [dj, di] of dir) {
      if (dfs(j + dj, i + di, index + 1)) return true;
    }
    visited.delete(key);
  }

  for (let j = 0; j < rowsLen; j++)
    for (let i = 0; i < colsLen; i++) {
      if (dfs(j, i, 0)) return true;
    }

  return false;
} // T:O(N*M*4^W)
