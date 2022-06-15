// https://www.educative.io/courses/grokking-the-coding-interview/YMzBx1gE5EO
// No-repeat Substring

// Given a string, find the length of the longest substring, which has no repeating characters.

const non_repeat_substring = function (str) {
  let max = -1;
  let hashMapCount = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    hashMapCount[letter] =
      hashMapCount[letter] == null ? 1 : hashMapCount[letter] + 1;

    while (hashMapCount[letter] > 1) {
      let starLetter = str[start];
      hashMapCount[starLetter] = hashMapCount[starLetter] - 1;
      start++;
    }

    max = Math.max(max, +i + 1 - start);
  }

  return max;
}; // T:O(N+N) S:(1) 26 English letters

// def non_repeat_substring(str):
//   count = 0

//   # hash indexes
//   hash = {}
//   start = 0

//   # use sliding windw
//   for end in range(len(str)):
//     end_char = str[end]

//     if end_char in hash:
//       # start cound be ahead of old end
//       start = max(start, hash[end_char] + 1)

//     hash[end_char] = end
//     count = max(count, end - start + 1)

//   return count
