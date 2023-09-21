// https://leetcode.com/problems/word-search/description/
// Word Search

// use DFS T:O(m*n) S:O(m*n)
// use BT S:O(m*n)
// use dir T:O(4^len(w))
// return true when end of the word
// check visited, remove visited to BT
// check borders
// check board letter === word letter
// T:O(N*M*4^w) S:O(M*N+W)

function exist(board: string[][], word: string): boolean {
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let m = board.length;
  let n = board[0].length;
  const visited = new Set();

  function dfs(j, i, index = 0) {
    let pos = `${j},${i}`;
    if (index === word.length) return true;
    if (
      board[j] == null ||
      board[j][i] == null ||
      board[j][i] !== word[index] ||
      visited.has(pos)
    )
      return false;

    visited.add(pos);
    index++;
    for (let [dj, di] of dir) if (dfs(j + dj, i + di, index)) return true;
    visited.delete(pos);
  }

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) if (dfs(j, i)) return true;

  return false;
} // T:O(M*N*4^W) S:O(M*N+L)
