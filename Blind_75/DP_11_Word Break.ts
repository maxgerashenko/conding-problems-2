// Word Break
// https://leetcode.com/problems/word-break/

// DP
// TopDown
// !can use init Words
// 1st check that word fit
// 2nd check that word fit
// check prev result

function wordBreak(s: string, words: string[]): boolean {
  let dp = [];
  let len = s.length;
  dp[len] = true; // base case end + 1

  for (
    let i = len - 1;
    i >= 0;
    i-- // last index
  )
    for (let w of words) {
      let isSpace = i + w.length - 1 < len;
      let areWordsEqual = s.slice(i, i + w.length - 1 + 1) === w;
      let hasPrevSolution = dp[i + w.length - 1 + 1];
      dp[i] = isSpace && areWordsEqual && hasPrevSolution;
      if (dp[i]) break; // one is enogth
    }

  return dp[0];
} // T:O(N*W*W) S:O(N)
