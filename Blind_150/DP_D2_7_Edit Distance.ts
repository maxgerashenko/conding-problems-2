// https://leetcode.com/problems/edit-distance/description/
// Edit Distance

// DP
// NO DFS
// DP bottom up but reversed
// for and for
// base cases are added to the n1+1 and n2+1
// use infinity for min
// inf inf inf inf 3
// inf inf inf inf 2
// inf inf inf inf 1
// 4.  3.  2.  1.  0
// n1+1 === 4,3,2,1,0; n2+1 ==== 3,2,1,0
// n1+1, n2+1 === 0
// dp = i1+i2 || 1 + 1 Math.min(i1+1 i2+1, i1+1 i2, i1 i2+1)
// T:O(n*n) S:O(m*n)

function minDistance(word1: string, word2: string): number {
  let n1 = word1.length;
  let n2 = word2.length;
  let dp = Array(n1).fill(Infinity);
  dp = dp.map((el) => Array(n2 + 1).fill(Infinity));
  dp = dp.map((el, j) => el.map((el, i) => (i === n2 ? n1 - j : el)));
  dp.push(
    Array(n2 + 1)
      .fill(Infinity)
      .map((el, i) => n2 - i)
  );

  for (let i1 = n1 - 1; i1 >= 0; i1--)
    for (let i2 = n2 - 1; i2 >= 0; i2--) {
      if (word1[i1] === word2[i2]) {
        dp[i1][i2] = dp[i1 + 1][i2 + 1]; // just copy pre
        continue;
      }
      dp[i1][i2] =
        1 + Math.min(dp[i1 + 1][i2 + 1], dp[i1 + 1][i2], dp[i1][i2 + 1]); // find optimal
    }

  return dp[0][0]; // bottom up return top
} // T:O(m*n) S:O(m*n)
