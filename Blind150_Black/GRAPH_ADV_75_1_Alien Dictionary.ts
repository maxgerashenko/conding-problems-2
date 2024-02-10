// https://www.lintcode.com/problem/892/
// Alien Dictionary

// Adjecencsy list is Topological sort
//
// Itreate ADJL
// init set of all letters
// build ADJL for all leters
// DFS post order in ADJL
// reverse the result
// conner A, AC - should be AC, A
// visitedBooleanMaP false/true
// check visited to avoid duplicates visited = false
// but check cycle with visited = true
//
// T:O(N) S:O(N)

export class Solution {
  alienOrder(words: string[]): string {
    let res = []; // response
    let adjMapSet = {}; // adjacency list

    for (let word of words)
      for (let l of word.split(''))
        if (adjMapSet[l] == null) adjMapSet[l] = new Set(); // init all letters

    for (let i = 0; i < words.length - 1; i++) {
      let w1 = words[i];
      let w2 = words[i + 1];
      let l1 = w1[0];
      let l2 = w2[0];

      if (l1 !== l2) {
        adjMapSet[l2].add(l1); // l1 is before l2
        continue;
      }

      let letterIndex = 0;
      let minLen = Math.min(w1.length, w2.length); // limit to shorter word
      while (letterIndex < minLen && l1 === l2) {
        letterIndex++;
        l1 = w1[letterIndex];
        l2 = w2[letterIndex];
      } // find next letter after equal
      if (l2 == null && l1 == null) continue; // ignore when word ended
      if (l2 == null) return ''; // conner case
      if (l2 == null || l1 == null) continue;
      adjMapSet[l2].add(l1); // add dependncy
    } // set adjacancy list

    let visited = new Set(); // visited at all
    let path = new Set(); // path to detect cycle in dfs
    function dfs(letter) {
      if (path.has(letter)) return true; // detect cycle
      path.add(letter);
      if (visited.has(letter)) return; // ignore visited
      visited.add(letter);

      let arr = Array.from(adjMapSet[letter]) || [];
      for (let pre of arr) if (dfs(pre)) return ''; // return '' if there is a cycle

      res.push(letter); // dfs postOrder
      path.delete(letter); // backtracking
    }

    for (let key of Object.keys(adjMapSet).sort()) if (dfs(key)) return '';

    return res.join('');
  }
} // T:O(N+K) S:O(N+K)
