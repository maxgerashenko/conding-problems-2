// https://leetcode.com/problems/rotting-oranges/
// Rotting Oranges

// BFS
// levels count
// 1n's count++ count--
// bfs
// dir
// bfs && level > 0
// return count ===0  ? rounds : -1;

// conner cases
// 2 only // 0
// 1 only // -1
// start from new roatted

function orangesRotting(grid: number[][]): number {
  // bfs
  let queue = [];
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let count = 0;
  const m = grid.length;
  const n = grid[0].length;
  let freshCount = 0;

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      let el = grid[j][i];
      if (el === 1) freshCount++;
      if (el !== 2) continue;
      queue.push([j, i]);
    } //init

  while (queue.length > 0) {
    let tmp = [];
    for (let [j, i] of queue) {
      for (let [dj, di] of dir) {
        const [newJ, newI] = [j + dj, i + di];
        if (newJ < 0 || newJ >= m || newI < 0 || newI >= grid[0].length)
          continue;
        const el = grid[newJ][newI];
        if (el !== 1) continue;
        grid[newJ][newI] = 2;
        freshCount--;
        tmp.push([newJ, newI]);
      }
    }
    if (tmp.length > 0) count++;
    queue = tmp;
  }

  return freshCount === 0 ? count : -1;
} // T:O(m*n*4) S:O(m*n)
