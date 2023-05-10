// https://leetcode.com/problems/alien-dictionary/
// Alien Dictionary

// https://leetcode.com/problems/alien-dictionary/
// https://www.lintcode.com/problem/892/
// Alien Dictionary

// Topological sort

// Elements:
// Adjacency List
// DFS post order and revert() resulst
// worng when it is cicle
// wrong when letter order is wrong maxs, max
//

function alienOrder(words) {
  if (words.length === 0) return '';
  if (words.length === 1) return words[0];
  const adjList = {};
  for (let w of words) for (let l of w.split('')) adjList[l] ??= [];
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];
    let min = Math.min(w1.length, w2.length);
    if (w1.length > w2.length && w1.slice(0, min) === w2.slice(0, min))
      return '';
    for (let j = 0; j < min; j++) {
      if (w1[j] !== w2[j]) {
        adjList[w1[j]].push(w2[j]);
        break;
      }
    }
  }
  let visited = {};
  let res = [];
  function dfs(c) {
    if (c in visited) return visited[c]; // don't visit twice
    visited[c] = true;
    for (let el of adjList[c]) {
      if (dfs(el)) return true; // loop in graph
    }
    visited[c] = false;
    res.push(c);
    return false; // no loop
  }
  for (let el of Object.keys(adjList)) {
    if (dfs(el)) return '';
  }
  return res.reverse().join('');
}
// T:O(T + C + E)) S: O(C + C + E) ,
//  # T is Total Letts Count
// C unique charectes 25
// E is number of edges
