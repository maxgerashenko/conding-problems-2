// https://leetcode.com/problems/pacific-atlantic-water-flow/description/
// Pacific Atlantic Water Flow

// use DFS
// run check for pasific
// run check for atlantic
// check union(not XOR) for res
// T:O(2*N*M) S:O(N*M)

function pacificAtlantic(heights: number[][]): number[][] {
  let n = heights[0].length;
  let m = heights.length;
  let res = [];
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let pas = new Set();
  let atl = new Set();

  function dfs(j, i, visited) {
    if (visited.has(`${j},${i}`)) return;
    visited.add(`${j},${i}`);

    for (let [dj, di] of dir) {
      if (heights[j + dj] == null || heights[j + dj][i + di] == null) continue;
      if (heights[j + dj][i + di] < heights[j][i]) continue;
      dfs(j + dj, i + di, visited);
    }
  }
  for (let j = 0; j < m; j++) dfs(j, 0, pas);
  for (let i = 0; i < n; i++) dfs(0, i, pas);
  for (let j = 0; j < m; j++) dfs(j, n - 1, atl);
  for (let i = 0; i < n; i++) dfs(m - 1, i, atl);

  for (let el of atl) {
    if (!pas.has(el)) continue;
    res.push((el as string).split(','));
  }

  return res;
} // T:O(2NM) S:O(NM)
