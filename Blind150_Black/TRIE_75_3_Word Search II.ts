// https://leetcode.com/problems/word-search-ii/description/
// Word Search II

// use Trie
// use dfs
// use set
// use path
// use visited
// reset visited on each new start j,i
// clean visited after move
// T:O(m*m*4^av) S:O(M*N or T*Av)

class TrieNode {
  nodes = {};
  isEnd = false;
}
class Trie {
  isEnd: true;
  nodes = {};
  constructor(words: string[]) {
    for (let w of words) this.add(w);
  }
  add(word: string) {
    if (word.length == 0 || word == null) return;
    let cur = this;
    for (let l of word.split('')) {
      if (cur.nodes[l] == null) cur.nodes[l] = new TrieNode();
      cur = cur.nodes[l];
    }
    cur.isEnd = true;
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const res = new Set<string>();
  let trie = new Trie(words);
  function dfs(root, j = 0, i = 0, path = '', visited = new Set()) {
    if (board[j] == null || board[j][i] == null || visited.has(`${i},${j}`))
      return;
    let letter = board[j][i];
    if (root.nodes[letter] == null) return;
    visited.add(`${i},${j}`);

    path += letter;
    root = root.nodes[letter];
    if (root.isEnd) res.add(path);

    dfs(root, j + 1, i, path, visited);
    dfs(root, j, i + 1, path, visited);
    dfs(root, j - 1, i, path, visited);
    dfs(root, j, i - 1, path, visited);
    visited.delete(`${i},${j}`);
  }
  for (let j = 0; j < board.length; j++)
    for (let i = 0; i < board[j].length; i++) dfs(trie, j, i);

  return [...res];
} // T:O(N) or O(ROWS*COLS * 4^LONG)) S:O(N) O(sum(words_length) + ROWS*COLS + N_WORDS)
