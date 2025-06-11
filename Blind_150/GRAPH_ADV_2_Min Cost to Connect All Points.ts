// https://leetcode.com/problems/min-cost-to-connect-all-points/
// Min Cost to Connect All Points

// use Prims Alog
// use hashmapArray adjecency list
// use visited node
// use min heap, by distance
// use manhatne distance |(x1-x2)| + |(y1-y2)|
//
// create adjecency list
// select the closest dot from the minHeap
// update the closes dots every tyme, but ignore visited
// T:O(N^2) S:O(N)

function minCostConnectPoints(points: number[][]): number {
  let len = points.length;
  let minHeap = new Heap((a, b) => a[0] - b[0]);
  let res = 0;
  let hashMapArray = {};
  let visited = new Set();

  for (let i = 0; i < len; i++) {
    let [x1, y1] = points[i];
    if (hashMapArray[i] == null) hashMapArray[i] = [];
    for (let j = i + 1; j < len; j++) {
      if (hashMapArray[j] == null) hashMapArray[j] = [];
      let [x2, y2] = points[j];
      let distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      hashMapArray[i].push([distance, j]);
      hashMapArray[j].push([distance, i]);
    }
  } // init

  minHeap.add([0, 0]);
  while (visited.size < len) {
    let [cost, i] = minHeap.remove();
    if (visited.has(i)) continue;
    res += cost;
    visited.add(i);
    for (let [cost, index] of hashMapArray[i]) {
      if (index in visited) continue;
      minHeap.add([cost, index]);
    }
  }

  return res;
} // T:O(N^2) S:O(N)
