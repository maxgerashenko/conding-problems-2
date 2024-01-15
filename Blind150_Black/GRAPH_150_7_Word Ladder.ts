// https://leetcode.com/problems/word-ladder/submissions/
// Word Ladder

// BFS
// adjacency list
// vistiedd
// level []
// T:O(N*M*26) S:O(N)

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  const visited = new Set();
  const adjList = {};
  let level = [beginWord];
  let step = 1;
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let tmp = word.split('');
      tmp[i] = '*';
      let mask = tmp.join('');
      if (adjList[mask] == null) {
        adjList[mask] = [];
      }
      adjList[mask].push(word);
    } // set adj list
  }

  function bfs() {
    let tmp = [];

    for (let word of level) {
      if (visited.has(word)) continue;
      if (word === endWord) return true;
      visited.add(word);
      for (let i = 0; i < word.length; i++) {
        let arr = word.split('');
        arr[i] = '*';
        let mask = arr.join('');

        if (adjList[mask] == null) continue;
        tmp.push(...adjList[mask]);
      }
    }

    level = tmp;
    if (level.length === 0) return;
    step++;
    if (bfs()) return true;
  }

  return bfs() ? step : 0;
} // T:O(N * Length * 26) S:O(N)// T:O(N * Length * 26) S:O(N)
