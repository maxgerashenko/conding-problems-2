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
  let level = [beginWord];
  let count = 0;

  // init  Adjacency list
  for (let word of wordList) {
    for (let i = 0; i < beginWord.length; i++) {
      let comb = word.slice(0, i) + '*' + word.slice(i + 1);
      if (adjacencyList[comb] == null) {
        adjacencyList[comb] = [];
      }
      adjacencyList[comb].push(word);
    }
  }

  function bfs() {
    let tmp = [];
    for (let word of level) {
      if (word == endWord) return true;
      visited.add(word);
      for (let i = 0; i < word.length; i++) {
        let comb = word.slice(0, i) + '*' + word.slice(i + 1);
        if (adjacencyList[comb] == null) continue;
        tmp.push(...adjacencyList[comb].filter((el) => !visited.has(el)));
      }
    }
    level = tmp;
    if (tmp.length === 0) return;
    count++;
    return bfs();
  }

  return bfs() ? count + 1 : 0;
} // T:O(N * Length * 26) S:O(N)// T:O(N * Length * 26) S:O(N)
