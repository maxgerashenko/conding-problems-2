// https://leetcode.com/problems/word-search-ii/description/
// Word Search II

class Node {
  nodes = {};
  isEnd = false;
  contructor() {}
}
function findWords(board: string[][], words: string[]): string[] {
  let m = board.length;
  let n = board[0].length;
  let res = new Set();
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // init
  let root = new Node();
  for (let word of words) {
    let letters = word.split('');
    let cur = root; // reset cur
    while (letters.length) {
      let letter = letters.shift();
      if (!cur.nodes[letter]) {
        cur.nodes[letter] = new Node();
      }
      cur = cur.nodes[letter]; // update cur
    }
    cur.isEnd = true; // mark as end
  }

  function dfs(cur, j, i, path = '', visited = new Set()) {
    let pos = `${j},${i}`;
    if (i < 0 || j < 0 || j >= m || i >= n) return; // check borders

    let letter = board[j][i];
    cur = cur.nodes[letter];
    if (cur == null) return; // conner case

    if (visited.has(`${j},${i}`)) return; // check visited
    visited.add(`${j},${i}`);

    path += letter;
    if (cur.isEnd) res.add(path); // base case

    for (let [dj, di] of dir) dfs(cur, j + dj, i + di, path, visited); // explore
    visited.delete(pos);
  }

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      dfs(root, j, i);
    }

  return [...res] as string[];
} // T:O(Max(Total*Av, M*N * 4^Av)) S:(Max(M*N, Av*Total))
