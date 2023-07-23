// https://leetcode.com/problems/redundant-connection/description/
// Word Ladder
// https://leetcode.com/problems/redundant-connection/description/
// Word Ladder

// it is Graph
// word connects with patterns a*aaa
// use HashMapArray
// use DFS
// use visited list
// level is the count
// HashMapArray where key is the pattern values are words
// while for level, for generated patters, for for words from HashMapArray
// T:O(N*M^2) , N words M length of the word S:O(N)

function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let visited = new Set();
  let patterns = {};

  if (!wordList.includes(endWord)) return 0; // conner case

  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let pat = word.slice(0, i) + '*' + word.slice(i + 1);
      if (patterns[pat] == null) {
        patterns[pat] = [];
      }
      patterns[pat].push(word);
    }
  }

  let level = new Set([beginWord]);
  let count = 0;
  while (level.size > 0) {
    count++;
    if (level.has(endWord)) return count;
    let tmp = [];
    for (let word of level) {
      visited.add(word);
      for (let i = 0; i < word.length; i++) {
        let pat = word.slice(0, i) + '*' + word.slice(i + 1);
        if (patterns[pat] == null) continue;
        for (let el of patterns[pat]) {
          if (visited.has(el)) continue;
          tmp.push(el);
        }
      }
    }
    level = new Set(tmp);
  }
  return 0;
} // T:O(N*M^2) N words, M length of words, patterns S:O(N)
