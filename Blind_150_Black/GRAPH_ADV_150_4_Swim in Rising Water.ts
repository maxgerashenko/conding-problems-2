// https://leetcode.com/problems/swim-in-rising-water/description/
// Swim in Rising Water

// use Djeikstara
// use MinHeap
// use dir []
// use bfs
// use max
// return max
//
// T:O(NlogK) S:O(N)

function swimInWater(grid: number[][]): number {
  const minHeap = new Heap((a, b) => a.val - b.val);
  const visited = new Set();
  let max = 0;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const n = grid.length;

  minHeap.add({ i: 0, j: 0, val: 0, key: `${0},${0}` });
  while (minHeap.heap.length) {
    let { i, j, key, val } = minHeap.remove();
    max = Math.max(max, val);
    if (i == n - 1 && j == n - 1) break;
    if (visited.has(key)) continue;
    visited.add(key);

    for (let [jx, ix] of dir) {
      let dj = j + jx;
      let di = i + ix;
      if (grid[dj] == null || grid[dj][di] == null) continue;
      minHeap.add({ j: dj, i: di, val: grid[dj][di], key: `${dj},${di}` });
    }
  }

  return max;
} // T:O(nlonK) S:O(N)
