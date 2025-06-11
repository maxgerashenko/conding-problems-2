// https://leetcode.com/problems/max-area-of-island/
// GRAPH_1_Max Area of Island.ts

// Use DFS
// use j,j
// conner case 0 or i < 0 || i === n
// return 1 + sum for directions
// mark visited cells
// use for for to try to start from every cell

function maxAreaOfIsland(grid: number[][]): number {
  let max = 0;
  let m = grid.length;
  let n = grid[0].length;

  function dfs(j, i) {
    if (i < 0 || i === n || j < 0 || j === m || grid[j][i] === 0) return 0; // base case
    grid[j][i] = 0; // mark as visited

    let local = dfs(j, i + 1) + dfs(j, i - 1) + dfs(j + 1, i) + dfs(j - 1, i);
    return 1 + local;
  }
  for (let j = 0; j < m; j++) {
    for (let i = 0; i < n; i++) {
      max = Math.max(max, dfs(j, i));
    }
  }

  return max;
} // T:O(m*n) S:O(m*n)
