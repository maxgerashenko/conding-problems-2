// https://www.lintcode.com/problem/663/
// Walls and Gates

// bfs
// count
// levels
// bfs
// T:O(MN) S:O(MN)

export class Solution {
  /**
   * @param rooms: m x n 2D grid
   * @return: nothing
   */
  wallsAndGates(rooms: number[][]) {
    // -1 wall;
    // 0 gate
    // 2147483647 not visited

    let level = [];
    let dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    let count = 0;

    // init
    for (let j in rooms)
      for (let i in rooms[0]) {
        if (rooms[+j][+i] === 0) {
          level.push([+j, +i]);
        }
      }

    function bfs() {
      if (level.length === 0) return;
      count++;
      const tmp = [];

      for (let [j, i] of level)
        for (let [dj, di] of dir) {
          const nextJ = +j + dj;
          const nextI = +i + di;
          if (
            rooms[nextJ] == null ||
            rooms[nextJ][nextI] == null ||
            rooms[nextJ][nextI] != 2147483647
          )
            continue;
          rooms[nextJ][nextI] = count;
          tmp.push([nextJ, nextI]);
        }

      level = tmp;
      bfs();
    }
    bfs();

    return rooms;
  }
}
