// https://leetcode.com/problems/permutation-in-string/description/
// Permutation in String

// use 2 sw
// use hashMapCount for pattern and word
// use match count = 26 letters
// decrease count on init
// increse on match
// when match === 26 return true;
// iterate right update count, hashMapsCounts
// slide left
// T:O(n+m) S:O(26)

function checkInclusion(s1: string, s2: string): boolean {
  let matchLettersCount = 26;
  let hashMapCountPattern = {};
  let hashMapCountString = {};
  let left = 0;
  let m = s1.length;
  let n = s2.length;

  for (let el of s1.split('')) {
    let isNew = hashMapCountPattern[el] == null;
    if (isNew) matchLettersCount--;
    hashMapCountPattern[el] = isNew ? 1 : hashMapCountPattern[el] + 1;
  } // init Pattern

  for (let right = 0; right < n; right++) {
    console.log(matchLettersCount);
    let rightEl = s2[right];
    hashMapCountString[rightEl] =
      hashMapCountString[rightEl] == null ? 1 : hashMapCountString[rightEl] + 1;

    if (hashMapCountString[rightEl] == hashMapCountPattern[rightEl])
      matchLettersCount++;

    let leftEL = s2[left];
    if (right >= m) {
      if (hashMapCountString[leftEL] == hashMapCountPattern[leftEL])
        matchLettersCount--;
      let isExist = leftEL in hashMapCountString;

      if (isExist) hashMapCountString[leftEL]--;
      if (hashMapCountString[leftEL] == 0) {
        delete hashMapCountString[leftEL];
      }
      left++;
    }

    if (matchLettersCount === 26) return true;
  }

  return false;
} //T:O(m+n) S:O(26)
