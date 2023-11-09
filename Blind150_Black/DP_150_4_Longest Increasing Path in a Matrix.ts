// https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
// Longest Increasing Path in a Matrix

// use DFS
// use hashMap
// not visited as increaing oreder doesn't repeats
// run dfs starting form each element
// find max for each elelemtn and add to prev
// retur max
//
// T:O(n*m) S:O(nm)

function longestIncreasingPath(matrix: number[][]): number {
  let n = matrix[0].length;
  let m = matrix.length;
  let max = 0;
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let hashMap: { [key: string]: number | null } = {};

  function dfs(j, i) {
    if (hashMap[`${j},${i}`] != null) return hashMap[`${j},${i}`];

    let tmp = 1;
    for (let [dj, di] of dir) {
      if (
        j + dj === m ||
        j + dj < 0 ||
        i + di === n ||
        i + di < 0 ||
        matrix[j + dj][i + di] <= matrix[j][i]
      )
        continue;
      tmp = Math.max(tmp, 1 + dfs(j + dj, i + di));
    }

    hashMap[`${j},${i}`] = tmp;
    return hashMap[`${j},${i}`];
  }

  for (let j = 0; j < m; j++)
    for (let i = 0; i < n; i++) {
      max = Math.max(max, dfs(j, i));
    }
  return max;
} // T:O(nm) S:O(nm)
