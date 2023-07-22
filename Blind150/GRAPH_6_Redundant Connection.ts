// https://leetcode.com/problems/redundant-connection/
// Redundant Connection

// Use Union Find
// use rootArray
// use RankArray
// use recurtion
// use return false to detect a Cycle
//
// Find is to find the root, RootArray
// Union is to set parent->child, Find, rootArray
// Concept: When full tree, need edje create a cycle 100%
// Use RankArray [index] 0 is useless
// RankArray to define parent -> child
// Use RootArray to set parant->child
// Iterrate all pairs and find roots and set unions
// use index as key and value as a value
// return false when pair roots to the same root, it's a cycle
// make route shorter after first find
//
// T:O(N) as interate all pairs, S:(N) as callstack

function findRedundantConnection(edges: number[][]): number[] {
  let rankArray = Array(edges.length + 1).fill(1);
  let rootArray = Array(edges.length + 1)
    .fill(0)
    .map((el, index) => index);

  function find(node) {
    let root = rootArray[node];
    while (node !== root) {
      node = root;
      root = rootArray[node];
    }
    return root;
  }

  function union(n1, n2) {
    let root1 = find(n1);
    let root2 = find(n2);

    if (root1 === root2) return false;

    if (rankArray[root1] >= rankArray[root2]) {
      rootArray[root2] = root1;
      rankArray[root1]++;
      return true;
    }
    rootArray[root1] = root2;
    rankArray[root2]++;
    return true;
  }

  for (let [n1, n2] of edges) {
    let res = union(n1, n2);
    if (!res) return [n1, n2];
  }

  return [];
} // T:O(N) S:O(N)
