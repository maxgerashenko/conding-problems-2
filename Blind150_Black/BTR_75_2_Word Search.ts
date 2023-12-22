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
  let m = board.length;
  let n = board[0].length;
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let visited = new Set();

  function dfs(j, i, index) {
    let key = `${j},${i}`;
    if (visited.has(key) || board[j][i] != word[index]) return false;
    if (index == word.length - 1) return true;
    visited.add(key);

    for (let [dj, di] of dir) {
      let nJ = j + dj;
      let nI = i + di;
      if (nJ < 0 || nI < 0 || nJ == m || nI == n) continue;
      if (dfs(nJ, nI, index + 1)) return true;
    }
    visited.delete(key);
  }

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) if (dfs(j, i, 0)) return true;

  return false;
} // T:O(nm) S:O(logN)// T:O(M*N*4^W) S:O(M*N+L)
