// https://leetcode.com/problems/word-ladder/submissions/
// Word Ladder

// BFS
// adjacency list
// vistied
// level []
// T:O(N*M*26) S:O(N)

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let visited = new Set();
  let adjacencyList = {};
  let n = beginWord.length;
  let level = [beginWord];
  let count = 0;

  // init  Adjacency list
  for (let word of wordList) {
    for (let i = 0; i < n; i++) {
      let wordA = word.split('');
      wordA[i] = '*';
      let comb = wordA.join('');
      if (adjacencyList[comb] == null) {
        adjacencyList[comb] = [];
      }
      adjacencyList[comb].push(word);
    }
  }

  function bfs() {
    let tmp = [];
    for (let word of level) {
      if (word == endWord) {
        count++;
        return true;
      }
      visited.add(word);
      for (let i = 0; i < n; i++) {
        let wordA = word.split('');
        wordA[i] = '*';
        let comb = wordA.join('');
        if (adjacencyList[comb] == null) continue;
        for (let newWord of adjacencyList[comb]) {
          if (visited.has(newWord)) continue;
          tmp.push(newWord);
        }
      }
    }
    level = tmp;
    if (tmp.length === 0) {
      return;
    }
    count++;
    return bfs();
  }

  return bfs() ? count : 0;
} // T:O(N * Length * 26) S:O(N)
