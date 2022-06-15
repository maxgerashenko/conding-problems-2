// #1

// 5.Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// DP Solution
// https://www.youtube.com/watch?v=UflHuQj6MVA

// ! Not optimized but easy to understand

// 5.Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

// DP Solution
// https://www.youtube.com/watch?v=UflHuQj6MVA

// ! Not optimized but easy to understand

// Main Ideas
// 1. If first and last are not equal
// it is not a polindrom
// 2. Index in matrix represent start
// and the end of any sub string length

//     0 1 2 3 4
//     b a b a d - end index
// 0 b 1 0 1 0 0
// 1 a - 1 0 1 0
// 2 b - - 1 0 0
// 3 a - - - 1 0
// 4 d - - - - 1
// |
// start - inedex

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = s.slice(0, 1);
  // dp[] - represents start
  // dp[][] - represents end
  let dp = [];
  for (let i = 0; i < s.length; i++) {
    dp.push([]);
  }

  // fill the diagolan means that
  // all single char el are polindrom
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }

  // fill palidroms of length 2
  for (let i = 0; i < s.length; i++) {
    dp[i][i + 1] = s[i] === s[i + 1];
    if (dp[i][i + 1] && max.length < 2) {
      max = s.slice(i, i + 1 + 1);
    }
  }

  // fill the res of the matrix
  for (let n = 2; n < s.length; n++) {
    for (let i = 0; i < s.length - 2; i++) {
      // if start and end chars are equal
      // and sub in the middle is palindrom
      // string is a palindrom
      if (s[i] === s[i + n] && dp[i + 1][i + n - 1]) {
        dp[i][i + n] = true;
        if (n > max.length - 1) {
          max = s.slice(i, i + n + 1);
        }
      }
    }
  }

  return max;
};
