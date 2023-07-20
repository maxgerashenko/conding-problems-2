// https://stackblitz.com/edit/conding-problems-oajgfe?file=Blind150%2FBT_7_N-Queens.ts,Blind150%2FBT_6_Letter%20Combinations.ts
// N-Queens

// Use BT
// Use DFS
// Use HashMap
// add row by row, as only one el could be in the row
// track the col is not busy in hashmap
// col - row will be the same in the diagonal, track it in the hashmap
// col + row will be the same in the 2nd diagonal, track in the hashmap
// use '.'.repeat for the result
// T:O(N^2) S:O(N)

var solveNQueens = function (n) {
  let res = [];
  let comb = [];
  let vertHapMap = new Set();
  let posDiaglHapMap = new Set();
  let negDiaglHapMap = new Set();

  function dfs(rowIndex = 0) {
    if (rowIndex === n) {
      res.push([...comb]);
      return;
    } // base case

    for (let i = 0; i < n; i++) {
      if (
        vertHapMap.has(i) ||
        posDiaglHapMap.has(i - rowIndex) ||
        negDiaglHapMap.has(i + rowIndex)
      )
        continue;

      vertHapMap.add(i);
      posDiaglHapMap.add(i - rowIndex);
      negDiaglHapMap.add(i + rowIndex);

      comb.push('.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1));
      dfs(rowIndex + 1);
      comb.pop();

      vertHapMap.delete(i);
      posDiaglHapMap.delete(i - rowIndex);
      negDiaglHapMap.delete(i + rowIndex);
    }
  }
  dfs();

  return res;
}; // T:O(n^2) S:O(n)
