// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
// Permutation in a String

const find_permutation = function (
  str,
  pattern,
  start = 0,
  matchCount = 0,
  hasMapCount = {}
) {
  for (let el of pattern)
    hasMapCount[el] = el in hasMapCount ? hasMapCount[el] + 1 : 1; // init hashMapCount
  for (let end = 0; end < str.length; end++) {
    if (str[end] in hasMapCount) {
      hasMapCount[str[end]]--;
      if (hasMapCount[str[end]] === 0) matchCount++;
    }
    if (matchCount === Object.keys(hasMapCount).length) return true; // base case
    if (end - start + 1 >= pattern.length) {
      if (str[start] in hasMapCount) {
        if (hasMapCount[str[start]] === 0) matchCount--;
        hasMapCount[str[start]]++;
      }
      start++;
    }
  }
  return false;
}; // T:O(N) S:O(1) English Letters 26
