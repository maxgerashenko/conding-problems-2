// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
// No-repeat Substring

// Given a string, find the length of the longest substring, which has no repeating characters.

const non_repeat_substring = function (str) {
  let max = 0;
  let start = 0;
  let hashMapIndex = {};
  for (let end in str.split('')) {
    if (hashMapIndex[str[end]] != null) {
      start = hashMapIndex[str[end]] + 1;
    }
    hashMapIndex[str[end]] = end;
    max = Math.max(max, +end + 1 - start);
  }
  return max;
}; // T:O(N) S:O(K)-26
