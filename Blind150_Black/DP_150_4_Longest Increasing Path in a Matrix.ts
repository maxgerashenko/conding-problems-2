// https://leetcode.com/problems/longest-palindromic-substring/description/
// Longest Palindromic Substring

// DP
// DP mutural exclusive ODD and EVEN
// return max result
//
// T:O(n) S:O(1)

function longestPalindrome(srt: string): string {
  let res = 0;
  let evenMax = '';
  let oddMax = '';

  let n = srt.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let pre = srt[i - j];
      let next = srt[i + j];
      if ((pre == null && next == null) || pre !== next) break;

      let newStr = srt.slice(i - j, i + j + 1);
      oddMax = newStr.length > oddMax.length ? newStr : oddMax;
    }
    for (let j = 0; j < n; j++) {
      let pre = srt[i - j];
      let next = srt[i + j + 1];
      if ((pre == null && next == null) || pre !== next) break;

      let newStr = srt.slice(i - j, i + j + 1 + 1);
      evenMax = newStr.length > evenMax.length ? newStr : evenMax;
    }
  }

  return oddMax.length > evenMax.length ? oddMax : evenMax;
} // ST:O(n) S:O(1)
