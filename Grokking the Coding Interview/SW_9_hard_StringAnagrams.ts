// https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM
// String Anagrams

// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:

const find_string_anagrams = function (str, pattern) {
  let result_indexes = [];
  let hashMapCount = {};

  for (let el of pattern.split('')) {
    hashMapCount[el] = hashMapCount[el] == null ? 1 : hashMapCount[el] + 1;
  }
  let copy = { ...hashMapCount };

  let start = 0;
  for (let i in str.split('')) {
    let letter = str[i];
    if (hashMapCount[letter] == null) {
      start = i + 1;
      hashMapCount = { ...copy };
      continue;
    }

    hashMapCount[letter]--;

    while (hashMapCount[letter] < 0) {
      let startLetter = str[start];
      hashMapCount[startLetter]++;
      start++;
    }

    if (Object.values(hashMapCount).reduce((res, el) => res + el, 0) === 0)
      result_indexes.push(start);
  }

  return result_indexes;
}; // T:O(N+P) S:(1) Pmax 26 letters
