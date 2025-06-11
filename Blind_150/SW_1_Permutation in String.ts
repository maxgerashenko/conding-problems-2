// Permutation in String
// https://leetcode.com/problems/permutation-in-string/

// 2 hashMaps
// count matrches as 26 max - not matches letters
// when count === 26 return true
// S:O(s1+s2) T:O(26)

function checkInclusion(s1: string, s2: string): boolean {
  let hashMapCountPattern = {}; // fingerPrint
  let hashMapCountWord = {}; // current
  let matchCount = 26;
  let left = 0;
  let n = s2.length;

  for (let el of s1.split('')) {
    if (!(el in hashMapCountPattern)) {
      hashMapCountPattern[el] = 0;
      matchCount--;
    }
    hashMapCountPattern[el]++;
  } // init fingerPrint

  for (let index = 0; index < s1.length; index++) {
    let el = s2[index];
    if (!(el in hashMapCountWord)) {
      hashMapCountWord[el] = 0;
    }
    hashMapCountWord[el]++;
    if (hashMapCountWord[el] === hashMapCountPattern[el]) matchCount++;
  } // init word length
  if (matchCount === 26) return true; // first try

  for (let right = s1.length; right < n; right++) {
    let el = s2[right];
    if (!(el in hashMapCountWord)) {
      hashMapCountWord[el] = 0;
    }
    hashMapCountWord[el]++;
    if (hashMapCountWord[el] === hashMapCountPattern[el]) matchCount++;

    el = s2[left];
    if (hashMapCountWord[el] === hashMapCountPattern[el]) matchCount--;
    hashMapCountWord[el]--;
    left++;

    if (matchCount === 26) return true;
  }

  return false;
} // T:O(n+m) S:O(26+26)
