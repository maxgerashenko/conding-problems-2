// https://www.educative.io/courses/grokking-the-coding-interview/R8DVgjq78yR
// Longest Substring with Same Letters

// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

const length_of_longest_substring = function (
  str,
  k,
  maxLength = 0,
  start = 0,
  hashMapCount = {},
  maxCount = 0
) {
  for (let end = 0; end < str.length; end++) {
    if (hashMapCount[str[end]] == null) hashMapCount[str[end]] = 0;
    hashMapCount[str[end]]++;
    maxCount = Math.max(maxCount, hashMapCount[str[end]]);
    while (end - start + 1 - maxCount > k) {
      hashMapCount[str[start]]--;
      start++;
      maxLength = Math.max(maxLength, hashMapCount[str[end]]);
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}; // T:O(N) S:(1) 26 letters
