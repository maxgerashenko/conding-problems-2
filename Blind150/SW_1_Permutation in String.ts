// Permutation in String
// https://leetcode.com/problems/permutation-in-string/

// 2 hashMaps
// count matrches as 26 max - not matches letters
// when count === 26 return true
// S:O(s1+s2) T:O(26)

function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false; // conner case
  let s1Hash = {};
  let s2Hash = {};
  let matchCount = 26;
  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];
    if (s1Hash[char] == null) {
      s1Hash[char] = 0;
      matchCount--;
    }
    s1Hash[char]++;
  }
  for (let right = 0; right < s2.length; right++) {
    let rightChar = s2[right];
    if (s2Hash[rightChar] == null) {
      s2Hash[rightChar] = 0;
    }
    s2Hash[rightChar]++;
    if (s1Hash[rightChar] == s2Hash[rightChar]) matchCount++;
    if (right >= s1.length) {
      let leftChar = s2[right - s1.length];
      if (s1Hash[leftChar] == s2Hash[leftChar]) matchCount--;
      s2Hash[leftChar]--;
      if (s2Hash[leftChar] == 0) {
        delete s2Hash[leftChar];
      }
    }
    if (matchCount === 26) return true;
  }
  return false;
} // T:O(N) S:O(26) as S:O(1)
