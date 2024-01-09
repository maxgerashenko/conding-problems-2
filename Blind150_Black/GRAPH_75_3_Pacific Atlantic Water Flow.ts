// https://leetcode.com/problems/pacific-atlantic-water-flow/description/
// Pacific Atlantic Water Flow

// use DFS
// run check for pasific
// run check for atlantic
// check union(not XOR) for res
// T:O(2*N*M) S:O(N*M)

// use sets unoin to define the res
// calculate each regeon separatly
// T:O(2MN) S:O(MN)

function pacificAtlantic(heights: number[][]): number[][] {
  const res = [];
  const pasVisitedSet = new Set();
  const atlVisitedSet = new Set();
  const rowsLeng = heights.length;
  const colsLen = heights[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const pasArray = [];
  const atlArray = [];

  for (let j = 0; j < rowsLeng; j++) {
    pasArray.push([j, 0]);
    atlArray.push([j, colsLen - 1]);
  }
  for (let i = 0; i < colsLen; i++) {
    pasArray.push([0, i]);
    atlArray.push([rowsLeng - 1, i]);
  } // init

  function bfs(list, visited) {
    if (list.length == 0) return;
    let tmp = [];

    for (let [j, i] of list) {
      visited.add(`${j},${i}`);
      for (let [dj, di] of dir) {
        const newJ = j + dj;
        const newI = i + di;
        if (heights[newJ] == null || heights[newJ][newI] == null) continue;
        if (heights[newJ][newI] < heights[j][i]) continue;
        if (visited.has(`${newJ},${newI}`)) continue;

        tmp.push([newJ, newI]);
      }
    }
    list = tmp;
    bfs(list, visited);
  }
  bfs(pasArray, pasVisitedSet);
  bfs(atlArray, atlVisitedSet);

  for (let el of pasVisitedSet) {
    if (atlVisitedSet.has(el)) {
      res.push((el as string).split(','));
    }
  }

  return res;
} // T:O(N*M) S:O(M*N)
