// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/description/

// DP
// Look for palindrom form the center
// Exclude when start and end is null
// check the option whe 0-1-0 and 0-0 even and odd

function longestPalindrome(s: string): string {
  let max = 0;
  let res = '';

  for (let i = 0; i < s.length; i++) {
    let start = i;
    let end = i;
    while (s[start] === s[end] && s[start] != null) {
      let tmpMax = Math.max(max, end - start + 1);
      if (tmpMax > max) {
        max = tmpMax;
        res = s.slice(start, end + 1);
      }
      start--;
      end++;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    let start = i;
    let end = i + 1;
    while (s[start] === s[end] && s[start] != null) {
      let tmpMax = Math.max(max, end - start + 1);
      if (tmpMax > max) {
        max = tmpMax;
        res = s.slice(start, end + 1);
      }
      start--;
      end++;
    }
  }

  return res;
}
// T:O(n) S:O(1)
