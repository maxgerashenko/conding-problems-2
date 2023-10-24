// https://www.lintcode.com/problem/892/
// Alien Dictionary

// Adjecencsy list is Topological sort
// Itreate ADJL
// init set of all letters
// build ADJL for all leters
// DFS post order in ADJL
// reverse the result
// conner A, AC - should be AC, A
// visitedBooleanMaP false/true
// check visited to avoid duplicates visited = false
// but check cycle with visited = true
// T:O(N) S:O(N)

export class Solution {
  alienOrder(words) {
    let adj = {};
    let n = words.length;
    let res = [];

    // init
    for (let word of words)
      for (let l of word.split('')) {
        if (adj[l] == null) adj[l] = new Set();
      }

    // build
    for (let i = 0; i < n - 1; i++) {
      let [w1, w2] = [words[i], words[i + 1]];
      let min = Math.min(w1.length, w2.length);
      if (w1[min] === w1[min] && w1.lenght > w2.length) return ''; // connter case
      for (let i = 0; i < min; i++) {
        let [l1, l2] = [w1[i], w2[i]];
        if (l1 === l2) continue;
        adj[l1].add(l2);
        break;
      }
    }

    //
    let visited = {};
    function dfs(l) {
      if (l in visited) return visited[l]; // dont visit twice
      visited[l] = true; // mark as cycle
      for (let l2 of adj[l]) {
        if (dfs(l2)) return true;
      }
      visited[l] = false; // mark as just visited
      res.push(l); // reorder
    }

    for (let l of Object.keys(adj)) {
      console.log(l);
      if (dfs(l)) return '';
    }

    return res.reverse().join('');
  }
} // T:O(N) S:O(N)
