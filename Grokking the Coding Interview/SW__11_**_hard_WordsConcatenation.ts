// https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O
//
// Words Concatenation

// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

const find_word_concatenation = function (
  str,
  words,
  wordLen = words[0].length,
  start = 0,
  hashMapCount = {},
  matchCount = 0,
  results = []
) {
  for (let word of words)
    hashMapCount[word] = word in hashMapCount ? hashMapCount[word] + 1 : 1; // init hasMap
  for (let end = 0; end < str.length / wordLen; end++) {
    let word = str.slice(end * wordLen, end * wordLen + wordLen);
    if (word in hashMapCount) {
      hashMapCount[word]--;
      if (hashMapCount[word] === 0) matchCount++;
    }
    if (matchCount === Object.keys(hashMapCount).length)
      results.push(start * wordLen);
    if (end < words.length - 1) continue;
    word = str.slice(start * wordLen, start * wordLen + wordLen);
    if (word in hashMapCount) {
      if (hashMapCount[word] === 0) matchCount--;
      hashMapCount[word]++;
    }
    start++;
  }
  return results;
}; // T:O(N) S:O(N)
