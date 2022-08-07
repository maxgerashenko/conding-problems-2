// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
// No-repeat Substring

// Given a string, find the length of the longest substring, which has no repeating characters.

const non_repeat_substring = function (str, start = 0, max = 0, hashMap = {}) {
  for (let end = 0; end < str.length; end++) {
    if (hashMap[str[end]] != null) start = hashMap[str[end]] + 1;
    hashMap[str[end]] = end;
    max = Math.max(max, end - start + 1);
  }
  return max;
}; // T:O(N) S:O(1) 26 english
