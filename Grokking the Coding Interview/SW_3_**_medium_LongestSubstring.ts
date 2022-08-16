// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function (
  str,
  k,
  start = 0,
  hashMap = {},
  max = 0
) {
  for (let end = 0; end < str.length; end++) {
    let endEl = str[end];
    hashMap[endEl] = hashMap[endEl] == null ? 1 : hashMap[endEl] + 1;
    while (Object.keys(hashMap).length > k) {
      let startEl = str[start];
      hashMap[startEl]--;
      if (hashMap[startEl] === 0) delete hashMap[startEl];
      start++;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
}; // T:O(N) S:O(1)
