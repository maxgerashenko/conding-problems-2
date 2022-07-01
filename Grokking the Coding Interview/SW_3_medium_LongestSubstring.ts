// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function (str, k) {
  let start = 0;
  let end = 0;
  let hashMapCount = {};
  let max = 0;
  for (end = 0; end < str.length; end++) {
    hashMapCount[str[end]] =
      hashMapCount[str[end]] == null ? 1 : hashMapCount[str[end]] + 1;
    while (Object.keys(hashMapCount).length > k) {
      hashMapCount[str[start]]--;
      if (hashMapCount[str[start]] === 0) delete hashMapCount[str[start]];
      start++;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
}; // T:O(N+K) S:O(K+1)
