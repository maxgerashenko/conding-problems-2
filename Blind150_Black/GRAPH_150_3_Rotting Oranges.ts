// https://leetcode.com/problems/rotting-oranges/
// Rotting Oranges

// BFS
// levels count
// 1n's count++ count--
// bfs
// dir
// bfs && level > 0
// return count ===0  ? rounds : -1;

let orangesRotting = function (grid) {
  let rounds = 0;
  let count = 0;
  let level = [];
  let m = grid.length;
  let n = grid[0].length;
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  // init
  for (let j = 0; j < m; j++) {
    for (i = 0; i < n; i++) {
      if (grid[j][i] == 2) level.push([j, i]);
      if (grid[j][i] == 1) count++;
    }
  }
  function bfs() {
    let curent = [];
    for (let [j, i] of level) {
      for (let [dj, di] of dir) {
        let newj = j + dj;
        let newi = i + di;
        if (
          grid[newj] == null ||
          grid[newj][newi] == null ||
          grid[newj][newi] == 0 ||
          grid[newj][newi] == 2
        )
          continue;
        grid[newj][newi] = 2;
        count--;
        curent.push([newj, newi]); // base case
      }
    }
    level = [...curent];

    if (level.length > 0) {
      rounds++;
      bfs();
    }
  }
  bfs();
  return count === 0 ? rounds : -1;
}; // T:O(NM) S:O(MN)
