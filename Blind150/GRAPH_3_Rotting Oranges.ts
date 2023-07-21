// https://leetcode.com/problems/rotting-oranges/
// Rotting Oranges

// Use BFS
// count freshCount
// check freshCount is 0 at the end
// use dir = [[1,0], [-1,0],[0,1][0,-1]]
// check freshCount and level for while
// check that orange is fresh in only when add the child
// coz first in the while is not fresh
// fresh -- only when add child to level
// T:O(M*N) S:(M*N);

function orangesRotting(grid: number[][]): number {
  let level = [];
  let count = 0;
  let fresh = 0; // count fresh
  let m = grid.length;
  let n = grid[0].length;

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      let el = grid[j][i];
      if (el === 1) fresh++;
      if (el !== 2) continue;
      level.push({ j, i });
    }
  console.log(fresh);

  let dir = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  while (level.length > 0 && fresh > 0) {
    count++;
    let tmp = [];
    for (let { j, i } of level) {
      for (let [dj, di] of dir) {
        let cj = j + dj;
        let ci = i + di;
        if (cj < 0 || cj === m || ci < 0 || ci === n || grid[cj][ci] !== 1)
          continue;
        tmp.push({ j: cj, i: ci });
        grid[cj][ci] = 2; // mark as rotten
        fresh--;
      }
    }
    level = tmp;
  }
  return fresh > 0 ? -1 : count;
} // T:O(M*N) S:O(M*N)
