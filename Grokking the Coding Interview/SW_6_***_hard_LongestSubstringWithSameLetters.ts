// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
// Longest Substring with Same Letters

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const length_of_longest_substring = function (
  str,
  k,
  start = 0,
  maxCount = 0,
  maxLength = 0,
  hashMapCount = {}
) {
  for (let end = 0; end < str.length; end++) {
    let endEl = str[end];
    hashMapCount[endEl] =
      hashMapCount[endEl] == null ? 1 : hashMapCount[endEl] + 1;
    maxCount = Math.max(maxCount, hashMapCount[endEl]);
    while (end - start + 1 > maxCount + k) {
      let startEl = str[start];
      hashMapCount[startEl]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}; // T:O(N) S:O(1) 26 letters in English
