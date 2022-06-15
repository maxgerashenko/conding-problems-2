// https://leetcode.com/problems/count-sorted-vowel-strings/
// Count Sorted Vowel Strings

var countVowelStrings = function(n) {
  // Algorithm
  // Use [j][i] array where
  // j is n - count of letters in the string
  // i - char in the string
  // for n 1 value is alwaus 1
  // for the last char valuse is aways 1
  // for [j][i] = [j-1][i] + [j][i-1]

  // n  a e i o u
  // 1  1 1 1 1 1
  // 2  5 4 3 2 1

  // a e i o u - 5
  const VOWELS_COUNT = 5;

  // init dp
  let dp = [new Array(VOWELS_COUNT).fill(1)];

  for (let j = 1; j <= n; j++) {
    // set last value
    dp[j] = [];
    dp[j][VOWELS_COUNT - 1] = 1;
    for (let i = VOWELS_COUNT - 2; i > -1; i--) {
      dp[j][i] = dp[j - 1][i] + dp[j][i + 1];
    }
  }

  return dp[n][0];
};

// Python

// class Solution:
//     def countVowelStrings(self, n: int) -> int:
//         if n == 0:
//             return 0

//         counts = [1]*5
//         while n > 1 :
//             n -= 1
//             for i in reversed(range(len(counts)-1)):
//                 counts[i] += counts[i+1];

//         return sum(counts)
