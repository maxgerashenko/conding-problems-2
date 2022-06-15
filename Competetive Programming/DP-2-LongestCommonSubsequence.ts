// #2

// 1143. Longest Common Subsequence
// https://leetcode.com/problems/longest-common-subsequence/
// https://www.youtube.com/watch?v=LAKWWDX3sGw

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// #2

var longestCommonSubsequence = function(text1, text2) {
  // Constraints 1<= text <=1000
  // Lower case english letters

  //   0 a d c d
  // 0 0 0 0 0 0
  // d 0 0 1 1 1
  // e 0 0 1 1 1
  // f 0 0 1 1 1

  // use dp matrix
  // j - rows - text2
  // i - cols - text1
  // if it is top border set 0
  // if it is left border set 0
  // if t1[i] === t2[j] take dp[j-1][i-1];
  // if t1[i] !== t2[j] take Math.max(dp[j-1][i], dp[j][i-1])

  let dp = [];
  // add row witch represent second text;
  for (let j = 0; j < text2.length; j++) {
    dp.push([]);
  }

  for (let j = 0; j < text2.length; j++) {
    for (let i = 0; i < text1.length; i++) {
      if (text2[j] === text1[i]) {
        dp[j][i] = j > 0 && i > 0 ? dp[j - 1][i - 1] + 1 : 1;
        continue;
      }
      let top = j > 0 ? dp[j - 1][i] : 0;
      let left = i > 0 ? dp[j][i - 1] : 0;
      dp[j][i] = Math.max(top, left);
    } // O(n)
  } // O(n^2)

  return dp[text2.length - 1][text1.length - 1];
};
