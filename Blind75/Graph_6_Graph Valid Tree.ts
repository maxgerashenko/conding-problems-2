// https://leetcode.com/problems/graph-valid-tree/
// https://www.lintcode.com/problem/178/

// Graph Valid Tree
export class Solution {
  // make adjacency list
  // use visited nodes
  // use prev to exclude parent
  // so we check
  // - is there a loop in any node exept parent
  // - is there a not connected nodes
  // check that leng of nodes === all visited length

  validTree(n, edges) {
    if (n === 0) return false;

    let adjList = {};
    for (let [n1, n2] of edges) {
      adjList[n1] ??= [];
      adjList[n1].push(n2);
      adjList[n2] ??= [];
      adjList[n2].push(n1);
    }

    const visited = new Set();
    function dfs(cur, pre = -1) {
      if (visited.has(cur)) return false;
      visited.add(cur);
      for (let node of adjList[cur]) {
        if (node == pre) continue;
        if (dfs(node, cur) === false) return false;
      }
      return true;
    }
    return dfs(0) && n === visited.size;
  }
} //  T:O(N) S:O(N) to stor visited nodes
