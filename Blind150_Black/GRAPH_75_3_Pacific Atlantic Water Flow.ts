// https://leetcode.com/problems/pacific-atlantic-water-flow/description/
// Pacific Atlantic Water Flow

// use DFS
// run check for pasifics
// run check for atlantic
// check union(not XOR) for res
// T:O(2*N*M) S:O(N*M)

// use sets unoin to define the res
// calculate each regeon separatly
// T:O(2MN) S:O(MN)

function pacificAtlantic(heights: number[][]): number[][] {
  const res = [];
  let pasificVisited = new Set();
  let atlVisited = new Set();
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const m = heights.length;
  const n = heights[0].length;
  let level = [];

  for (let j = 0; j < m; j++) level.push([j, 0]);
  for (let i = 0; i < n; i++) level.push([0, i]);
  bfs(level, pasificVisited);

  level = [];

  for (let j = 0; j < m; j++) level.push([j, n - 1]);
  for (let i = 0; i < n; i++) level.push([m - 1, i]);
  bfs(level, atlVisited);

  for (let key of pasificVisited)
    if (atlVisited.has(key)) res.push((key as string).split(','));

  function bfs(level, visited) {
    if (level.length === 0) return;

    let tmp = [];
    for (let [j, i] of level) {
      let key = `${j},${i}`;

      visited.add(key);

      for (let [dj, di] of dir) {
        let [newJ, newI] = [j + dj, i + di];
        let newKey = `${newJ},${newI}`;
        if (newJ >= m || newJ < 0 || newI >= n || newI < 0) continue;
        if (heights[newJ][newI] < heights[j][i]) continue;
        if (visited.has(newKey)) continue;

        tmp.push([newJ, newI]);
      }
    }

    bfs(tmp, visited);
  }

  return res;
} // T:O(M*N) S:O(M*N) // T:O(N*M) S:O(M*N)
