// https://leetcode.com/problems/edit-distance/description/
// Edit Distance

// use DFS
// use hashMap
// base case if end of each or only one
// other wise i+1 j+1 when equla
// i, j+1 for insert
// i+1, j+1 for replace
// i+1, j, for delete
// return min of it
//
// T:O(n*m) S:O(N);

function minDistance(word1: string, word2: string): number {
  const n = word1.length;
  const m = word2.length;
  const hashmap = {};

  function dfs(i = 0, j = 0) {
    let key = `${i},${j}`;
    if (key in hashmap) return hashmap[key];
    if (i === n && j === m) return 0; // base case end
    if (i === n) return m - j; // base case insert
    if (j === m) return n - i; // base case delete
    if (word1[i] === word2[j]) return dfs(i + 1, j + 1);

    hashmap[key] =
      1 +
      Math.min(
        dfs(i + 1, j), // delete
        dfs(i + 1, j + 1), // replace
        dfs(i, j + 1) // insert
      );
    return hashmap[key];
  }

  return dfs();
} // T:O(n*m) S:O(n*m)
