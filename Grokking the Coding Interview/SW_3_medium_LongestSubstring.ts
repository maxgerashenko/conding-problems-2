// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
// Longest Substring

// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// You can assume that K is less than or equal to the length of the given string.

const longest_substring_with_k_distinct = function (str, k) {
  let max = 0;
  let start = 0;
  let hashMapCount = {};
  for (let i = 0; i < str.length; i++) {
    let endLetter = str[i];
    hashMapCount[endLetter] =
      hashMapCount[endLetter] == null ? 1 : hashMapCount[endLetter] + 1;
    console.log(hashMapCount);

    if (i < k - 1) continue;

    while (Object.keys(hashMapCount).length > k) {
      let startLetter = str[start];
      if (hashMapCount[startLetter] > 1) {
        hashMapCount[startLetter] = hashMapCount[startLetter] - 1;
      }
      if (hashMapCount[startLetter] === 1) delete hashMapCount[startLetter];

      start++;
    }

    max = Math.max(max, i + 1 - start);
  }

  return max;
}; // T:O(N) S:O(K+1)
