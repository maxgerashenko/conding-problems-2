// https://leetcode.com/problems/walls-and-gates/
// https://www.lintcode.com/problem/663/
// Walls and Gates

// use bfs
// use count
// use while for bfs
// use tmp for level
// init room value is INFINITY(2147483647)
// use dir [[1,0][-1,0][0,1][0,-1]

export class Solution {
  wallsAndGates(rooms: number[][]) {
    let level = [];
    let m = rooms.length;
    let n = rooms[0].length;
    let count = 1;

    for (let j = 0; j < m; j++)
      for (let i = 0; i < n; i++) {
        if (rooms[j][i] != 0) continue;
        level.push([j, i]);
      } // find all gates

    let dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    while (level.length > 0) {
      let tmp = [];
      for (let [j, i] of level) {
        for (let [dj, di] of dirs) {
          let cj = j + dj;
          let ci = i + di;
          if (
            cj < 0 ||
            ci < 0 ||
            cj === m ||
            ci === n ||
            rooms[cj][ci] != 2147483647
          )
            continue;
          rooms[cj][ci] = count;
          tmp.push([cj, ci]);
        }
      }
      count++;
      level = tmp;
    } // BFS
  }
} // T:O(MN) S:O(MN)
