// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
// No-repeat Substring

// Given a string, find the length of the longest substring, which has no repeating characters.

const non_repeat_substring = function (
  str,
  max = 0,
  start = 0,
  hashMapIndex = {}
) {
  for (let end = 0; end < str.length; end++) {
    let endEl = str[end];
    if (hashMapIndex[endEl] != null) start = hashMapIndex[endEl] + 1;
    hashMapIndex[endEl] = end;
    max = Math.max(max, end - start + 1);
  }
  return max;
}; // T:O(N) S:(1) 25 letter in English
