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
  const rowsLen = grid.length;
  const colsLen = grid[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let newRotten = [];
  let count = -1;
  let totalCount = 0;

  for (let j = 0; j < rowsLen; j++)
    for (let i = 0; i < colsLen; i++) {
      let el = grid[j][i];
      if (el === 1) totalCount++;
      if (el !== 2) continue;
      newRotten.push([j, i]);
    } // init

  if (newRotten.length === 0) return totalCount === 0 ? 0 : -1;
  count++;

  function bfs() {
    let tmp = [];

    for (let [j, i] of newRotten) {
      for (let [dj, di] of dir) {
        let [newJ, newI] = [j + dj, i + di];
        if (newJ < 0 || newJ >= rowsLen || newI < 0 || newI >= colsLen)
          continue;
        if (grid[newJ][newI] !== 1) continue;
        grid[newJ][newI] = 2;
        totalCount--;
        tmp.push([newJ, newI]);
      }
    }

    newRotten = [...tmp];
    if (newRotten.length === 0) return;
    count++;
    bfs();
  }
  bfs();

  return totalCount === 0 ? count : -1;
} // T:O(m*n) S:O(m*n)
