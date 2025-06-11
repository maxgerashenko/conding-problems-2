// https://leetcode.com/problems/palindromic-substrings/description/
// Palindromic Substrings

// DP
// Muturaly exclusice ODD and EVEN
// count ODDS and Evens
//
// T:O(N^2) S:O(1)

function countSubstrings(str: string): number {
  let count = 0;
  let n = str.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (str[i - j] == null && str[i + j] == null) ||
        str[i - j] !== str[i + j]
      )
        break;
      count++;
    } // odd

    for (let j = 0; j < n; j++) {
      if (
        (str[i - j] == null && str[i + 1 + j] == null) ||
        str[i - j] !== str[i + 1 + j]
      )
        break;
      count++;
    } // even
  }
  return count;
} // T:O(n^2) S:O(1)
