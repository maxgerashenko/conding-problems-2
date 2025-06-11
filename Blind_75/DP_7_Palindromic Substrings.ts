// Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

// look for the polindrom for every Element and expand <- ->
// instaed of check all positins

function countSubstrings(s: string): number {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let start = i;
    let end = i;
    while (s[start] === s[end] && s[start] != null) {
      count++;
      start--;
      end++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let start = i;
    let end = i + 1;
    while (s[start] === s[end] && s[start] != null) {
      count++;
      start--;
      end++;
    }
  }

  return count;
} // T:O(n^2) S:O(n)
