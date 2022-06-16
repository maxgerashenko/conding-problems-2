// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
// Permutation in a String

const find_permutation = function (str, pattern) {
  let start = 0;
  let hashMapCount = {};

  for (let letter of pattern.split('')) {
    hashMapCount[letter] = hashMapCount[letter] == null ? 1 : hashMapCount[letter] + 1;
  }

  let hashMapCountCopy = {...hashMapCount};
  for (let i in str.split('')) {
    let letter = str[i];
    if (pattern.indexOf(letter) === -1) {
      hashMapCountCopy = {...hashMapCount};
      start = +i;
      continue;
    }
    if (pattern.indexOf(letter) > -1) hashMapCountCopy[letter]--;

    while (hashMapCountCopy[letter] === -1) {
      let startLetter = str[start];
      hashMapCountCopy[startLetter]++;
      start++;
    }

    if (Object.values(hashMapCountCopy).reduce((res, el) => res + el, 0) === 0) return true;
  }

  return false;
}; // T:O(N+K) S:(1) Kmax 26 letters;
