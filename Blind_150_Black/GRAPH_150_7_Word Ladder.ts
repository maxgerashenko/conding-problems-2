// https://leetcode.com/problems/word-ladder/submissions/
// Word Ladder

// BFS
// adjacency list
// vistiedd
// level []
// T:O(N*M*26) S:O(N)

function ladderLength(beginWord, endWord, wordList) {
  let masksMap = {};
  if (wordList.indexOf(endWord) == -1) return 0;
  const getMask = (word, i) =>
    `${word.substring(0, i)}*${word.substring(i + 1)}`;

  // Create masks
  for (let word of wordList)
    for (let i = 0; i < word.length; i++) {
      let mask = getMask(word, i);
      if (!masksMap[mask]) {
        masksMap[mask] = [];
      }
      masksMap[mask].push(word);
    } // init T:O(n*m*m)

  let queue = [beginWord];
  const visited = new Set(queue);
  let levelCount = 1;

  while (queue.length) {
    let tmp = [];
    for (let word of queue) {
      if (word === endWord) return levelCount;
      for (let i = 0; i < word.length; i++) {
        let mask = getMask(word, i);
        if (masksMap[mask] == null) continue;
        for (let el of masksMap[mask]) {
          if (visited.has(el)) continue;
          visited.add(el);
          tmp.push(el);
        }
      }
    }
    queue = tmp;
    levelCount++;
  } // bfs

  return 0;
} // T:O(n*m^2) S:O(n)
