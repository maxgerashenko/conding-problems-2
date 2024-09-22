// Edit Distance
//
// https://leetcode.com/problems/edit-distance/description/

// insert i+1
// delete j+1
// replace i+1 j+1
// -1 -1 = 0
// -1 = the length of cur word
// 0 -1 = the lenght of cur word
//
// 0 1 2
// 1 - -

function minDistance(word1: string, word2: string): number {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = Array(len2 + 1)
    .fill(null)
    .map((el) => Array(len1 + 1).fill(0));
  dp[0] = dp[0].map((el, i) => i);
  for (let j = 0; j < len2 + 1; j++) {
    dp[j][0] = j;
  }

  for (let j = 1; j < len2 + 1; j++) {
    for (let i = 1; i < len1 + 1; i++) {
      dp[j][i] =
        word2[j - 1] === word1[i - 1]
          ? dp[j - 1][i - 1]
          : Math.min(
            dp[j - 1][i], // insert
            dp[j][i - 1], // delete
            dp[j - 1][i - 1] // replace
          ) + 1;
    }
  }

  return dp[len2][len1];
} // T:O(min(n,m)) S:O(m*n)


// optimized
// Edit Distance
//
// https://leetcode.com/problems/edit-distance/description/

// insert i+1
// delete j+1
// replace i+1 j+1
// -1 -1 = 0
// -1 = the length of cur word
// 0 -1 = the lenght of cur word
//
// 0 1 2
// 1 - -

function minDistance(word1: string, word2: string): number {
  if (word1.length < word2.length) {
    [word1, word2] = [word2, word1];
  }
  const len1 = word1.length;
  const len2 = word2.length;
  let pre = Array(len1 + 1).fill(0).map((el, i) => i); // delete every letter in the row
  let dp = Array(len1 + 1).fill(0);

  for (let j = 1; j < len2 + 1; j++) {
    dp[0] = j; // delete every letter in the col
    for (let i = 1; i < len1 + 1; i++) {
      dp[i] =
        word2[j - 1] === word1[i - 1]
          ? pre[i - 1]
          : Math.min(
            pre[i], // insert
            dp[i - 1], // delete
            pre[i - 1] // replace
          ) + 1;
    }
    if (j < len2) {
      [pre, dp] = [dp, pre];
    }
  }

  return dp[len1];
} // T:O(nm) S:O(n)
