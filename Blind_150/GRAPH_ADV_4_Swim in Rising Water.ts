// https://leetcode.com/problems/swim-in-rising-water/
// Swim in Rising Water

// use Dijksta Algo
// use bfs
// use minHeap instead of array
// use visited
// use dir array = [[1,0],[-1,0],[0,1],[0,-1]]
// will get to the end for sure
// trick to use max value of the path for the minHeap
// T:O(n^2logN) S:O(N)
// if not T:O(2^2N) S:O(2n)

function swimInWater(grid: number[][]): number {
  let n = grid.length;
  let visited = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let minHeap = new Heap((a, b) => a[0] - b[0]);

  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  minHeap.add([grid[0][0], 0, 0]);
  while (minHeap.heap.length > 0) {
    let [val, j, i] = minHeap.remove();
    if (j === n - 1 && i === n - 1) return val; // base case
    if (visited[j][i]) continue;
    visited[j][i] = true;

    for (let [optionJ, optionI] of dir) {
      let [nextJ, nextI] = [j + optionJ, i + optionI];
      if (nextJ < 0 || nextI < 0 || nextJ === n || nextI === n) continue;
      minHeap.add([Math.max(val, grid[nextJ][nextI]), nextJ, nextI]);
    }
  }
} // T:O(n^2logN) S:O(n^2)
