// https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O
//
// Smallest Window containing Substring

// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

const find_substring = function (
  str,
  pattern,
  start = 0,
  hashMapCount = {},
  count = 0,
  min = ' '.repeat(str.length)
) {
  for (let el of pattern)
    hashMapCount[el] = el in hashMapCount ? hashMapCount[el] + 1 : 1; // init hashMap
  for (let end = 0; end < str.length; end++) {
    let el = str[end];
    if (el in hashMapCount) {
      hashMapCount[el]--;
      if (hashMapCount[el] === 0) count++;
    }
    while (count === Object.keys(hashMapCount).length) {
      min =
        str.slice(start, end + 1).length <= min.length
          ? str.slice(start, end + 1)
          : min;
      let el = str[start];
      if (el in hashMapCount) {
        if (hashMapCount[el] === 0) count--;
        hashMapCount[el]++;
      }
      start++;
    }
  }
  return min.trim();
}; // T:O(N) S:O(N)
