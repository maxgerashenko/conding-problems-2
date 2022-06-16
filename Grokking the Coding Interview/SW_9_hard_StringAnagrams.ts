// https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM
// String Anagrams

// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:

const find_substring = function (str, pattern) {
  let min = Number.MAX_SAFE_INTEGER;
  let minString = '';
  let hashMapCountdown = {};

  for (let el of pattern.split('')) {
    hashMapCountdown[el] = hashMapCountdown[el] == null ? 1 : hashMapCountdown[el] + 1;
  }
  let matchCountdown = Object.keys(hashMapCountdown).length;

  let start = 0;
  for (let i in str.split('')) {
    let letter = str[i];
    if (hashMapCountdown[letter] == null) continue;

    hashMapCountdown[letter]--;
    if (hashMapCountdown[letter] === 0) matchCountdown--;

    
    while (matchCountdown === 0) {
      if (i - start + 1 < min) {
        min = i - start + 1;
        minString = str.slice(start, i + 1);
      }

      let startLetter = str[start];
      if (hashMapCountdown[startLetter] != null) {
        hashMapCountdown[startLetter]++;
        if(hashMapCountdown[startLetter] > 0) matchCountdown++;
      }
      start++;
    }
  }

  return minString;
} // T:O(N+P) S:O(1) Pmax = 26 letters
