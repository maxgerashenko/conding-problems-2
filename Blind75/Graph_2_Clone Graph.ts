// https://leetcode.com/problems/clone-graph/
// Clone Graph

// use DFS in paralell grahs
// grahs are not trees and could hage cicle
// use Map to check visited and val as a key
// return visited as root should be there;

function cloneGraph(root: Node | null): Node | null {
  if (!root) return null;
  let visited = new Map();
  function dfs(cur) {
    if (visited.has(cur.val)) return visited.get(cur.val);
    const cur_copy = new Node(cur.val);
    visited.set(cur.val, cur_copy);
    for (let node of cur.neighbors) cur_copy.neighbors.push(dfs(node));
    return cur_copy;
  }
  dfs(root);
  return visited.get(root.val);
}
// T:O(N + E) S:O(N^2)
// call stack N to visit all nodes, and N to store all visited
