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
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let steps = 0;
  let count = 0;
  let level = [];
  const m = grid.length;
  const n = grid[0].length;

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      if (grid[j][i] === 2) {
        level.push([j, i]); // init
        continue;
      }
      if (grid[j][i] === 1) count++;
    }

  function bfs() {
    if (level.length === 0) return;
    if (count === 0) return;
    steps++;

    let tmp = [];
    for (let [j, i] of level) {
      for (let [dj, di] of dir) {
        let [newJ, newI] = [j + dj, i + di];
        if (newJ < 0 || newJ >= m || newI < 0 || newI >= n) continue;
        if (grid[newJ][newI] !== 1) continue;
        grid[newJ][newI] = 2;
        count--;
        tmp.push([newJ, newI]);
      }
    }

    level = tmp;
    bfs();
  }
  bfs();

  return count === 0 ? steps : -1;
} // T:O(M*N) S:O(M*N)
