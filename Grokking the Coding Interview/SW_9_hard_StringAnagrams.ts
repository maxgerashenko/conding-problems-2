// https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM
//
// String Anagrams (hard)

// Given a string and a pattern, find all anagrams of the pattern in the given string

const find_string_anagrams = function (
  str,
  pattern,
  results = [],
  start = 0,
  count = 0,
  hashMapCount = {}
) {
  for (let el of pattern)
    hashMapCount[el] = el in hashMapCount ? hashMapCount[el] + 1 : 1; // init pattern hashMap
  for (let end = 0; end < str.length; end++) {
    if (str[end] in hashMapCount) {
      hashMapCount[str[end]]--;
      if (hashMapCount[str[end]] === 0) count++;
    }
    if (count === Object.keys(hashMapCount).length) results.push(start);
    if (end < pattern.length - 1) continue;
    if (!(str[start] in hashMapCount)) continue;
    if (hashMapCount[str[start]] === 0) count--;
    hashMapCount[str[start]]++;
    start++;
  }
  return results;
}; // T:O(N) S:(N) patter is 1 char and all str is that char
