// https://www.educative.io/courses/grokking-the-coding-interview/YQ8N2OZq0VM
// String Anagrams

// Given a string and a pattern, find all anagrams of the pattern in the given string.

// Every anagram is a permutation of a string. As we know, when we are not allowed to repeat characters while finding permutations of a string, we get N!N! permutations (or anagrams) of a string having NN characters. For example, here are the six anagrams of the string “abc”:

const find_string_anagrams = function(str, pattern) {
  // find all anograms of the pattern in the given string
  // anagram is pemutation

  // use 2 pointers from 1 side, as sliding window
  // use hashMap to count chars in pattern
  // use matchCounter to count matches

  // init hashMap and count chars
  // iterate array
  // increment end
  // if char in pattern, decrement char count
  // and increment matchCount if hashMap count === 0
  // if end - start + 1 > pattern length
  // move start, if start char in pattern and === 0 decrement matchCount
  // and increment hashMap char count
  // if match count === pattern chars count
  // add start to the result
  // return result

  let result_indexes = [];

  let hashMap = {};
  let matchCount = 0;

  // init hashMap
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    if (!(char in hashMap)) {
      hashMap[char] = 0;
    }
    hashMap[char]++;
  }
  console.log(hashMap);

  let start = 0;
  for (let end = 0; end < str.length; end++) {
    let charEnd = str[end];
    if (charEnd in hashMap) {
      hashMap[charEnd]--;
      if (hashMap[charEnd] === 0) matchCount++;
    }

    if (end - start + 1 > pattern.length) {
      let charStart = str[start];
      if (charStart in hashMap) {
        if (hashMap[charStart] === 0) matchCount--;
        hashMap[charStart]++;
      }
      start++;
    }

    if (matchCount === Object.keys(hashMap).length) {
      result_indexes.push(start);
    }
  }

  return result_indexes;
}; // O(N + P) space O(P), when hashMap will is full of disticnt pattern chars
