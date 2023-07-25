// https://leetcode.com/problems/network-delay-time/
// Network Delay Time

// use Djeikstara Alog
// use BFS
// use minHeap to start from smallest
// use visitedSet to avoid loops
// use hashMapArray as adjesensy list
// use Math.max to set min time to visit all
// use Djeikstara to find the minimum time to cover all
// but need to update value to max of visited
// T:O(E*logV^2) as biderectional grapgh S:O(V)

function networkDelayTime(times: number[][], n: number, k: number): number {
  let res = 0;
  let visited = new Set();
  let minHeap = new Heap((a, b) => a[0] - b[0]);
  let hashMapList = {};

  for (let i = 0; i <= n; i++) hashMapList[i] = []; // init hashmap
  for (let [start, end, weigth] of times)
    hashMapList[start].push([weigth, end]); // set hashmap

  minHeap.add([0, k]);
  while (minHeap.heap.length > 0) {
    let [weight, index] = minHeap.remove();
    if (visited.has(index)) continue;
    visited.add(index);
    res = Math.max(res, weight); // finds the longest path, min path

    for (let [nextWeight, nextIndex] of hashMapList[index]) {
      if (visited.has(nextIndex)) continue;
      minHeap.add([weight + nextWeight, nextIndex]);
    }
  }

  return visited.size === n ? res : -1; // check that all nodes are connected
} // T:O(E*logV^2) + S:O(E) // T:O(ElogV)
