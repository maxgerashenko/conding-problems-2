// Word Search
// https://leetcode.com/problems/word-search/description/

function exist(board: string[][], word: string): boolean {
  let set = new Set();
  function bt(j = 0, i = 0, index = 0) {
    if (index === word.length) return true;
    if (
      board[j] == null ||
      board[j][i] == null ||
      board[j][i] !== word[index] ||
      set.has(String(j) + i)
    )
      return false;

    set.add(String(j) + i);
    let res =
      bt(j + 1, i, index + 1) ||
      bt(j - 1, i, index + 1) ||
      bt(j, i + 1, index + 1) ||
      bt(j, i - 1, index + 1);
    set.delete(String(j) + i);
    return res;
  }
  for (let j = 0; j < board.length; j++)
    for (let i = 0; i < board[j].length; i++) if (bt(j, i)) return true;
  return false;
} // T:O(m*n*4^len(word)) S:O(m*n+k) set size = m*n, call stack = k
