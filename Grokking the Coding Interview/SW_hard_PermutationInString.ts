// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
// Permutation in a String

const find_permutation = function(str, pattern) {
  // Is permutation of the substring in the string

  // use hashMapCount for permutations
  // use matchCounter for char in hashMap when char count = 0
  // use a sliding window with a length of substring
  // return true if match count === 0
  // return fast at the end
  let hashMapCount = {};
  let matchCount = 0;

  for (let char of pattern) {
    hashMapCount[char] = !(char in hashMapCount) ? 1 : hashMapCount[char] + 1;
  }

  let start = 0;
  for (let end = 0; end < str.length; end++) {
    let endChar = str[end];
    if (endChar in hashMapCount) {
      hashMapCount[endChar]--;

      if (hashMapCount[endChar] === 0) {
        matchCount++;
      }
    }

    // all counts are zero
    if (matchCount === Object.keys(hashMapCount).length) {
      return true;
    }

    // shrink the window
    if (end - start + 1 === pattern.length) {
      let startChar = str[start];

      if (startChar in hashMapCount) {
        if (hashMapCount[startChar] === 0) {
          matchCount--;
        }
        hashMapCount[startChar]++;
      }

      start++;
    }
  }

  return false;
};
