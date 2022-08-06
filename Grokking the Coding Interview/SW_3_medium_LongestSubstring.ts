// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function (
  str,
  k,
  max = 0,
  start = 0,
  end = 0,
  hashMapCount = {}
) {
  hashMapCount[str[start]] = 1;
  while (start <= end && end < str.length) {
    max = Math.max(max, end - start + 1);
    end++;
    hashMapCount[str[end]] =
      hashMapCount[str[end]] == null ? 1 : hashMapCount[str[end]]++;
    while (start <= end && Object.keys(hashMapCount).length > k) {
      hashMapCount[str[start]]--;
      if (hashMapCount[str[start]] === 0) delete hashMapCount[str[start]];
      start++;
    }
  }
  return max;
}; // T:O(N) S:O(K)
