// https://leetcode.com/problems/network-delay-time/description/
// Network Delay Time

// use Dijkstra's
// use visited
// use minHeap with path
// use use adjList
// use max of path
// T:O(ElogV) S:O(E)

function networkDelayTime(times: number[][], n: number, k: number): number {
  const minHeap = new Heap((a, b) => a.path - b.path);
  const visited = new Set();
  const adjList = new Array(n + 1).fill(null).map((el) => []);
  let res = 0;

  for (const [from, next, val] of times) adjList[from].push({ next, val });

  minHeap.add({ to: k, path: 0 });
  while (minHeap.heap.length > 0) {
    let { to, path } = minHeap.remove();

    if (visited.has(to)) continue; // exclude visited
    visited.add(to);
    res = path;

    for (const { next, val } of adjList[to])
      minHeap.add({ to: next, path: path + val });
  }

  return visited.size < n ? -1 : res;
} // T:O(ElogV) S:O(E)
