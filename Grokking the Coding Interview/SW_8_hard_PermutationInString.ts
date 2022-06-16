// https://www.educative.io/courses/grokking-the-coding-interview/N8vB7OVYo2D
// Permutation in a String

const find_permutation = function (str, pattern) {
  let hashMapCount = {};

  for (let letter of pattern.split('')) {
    hashMapCount[letter] = hashMapCount[letter] == null ? 1 : hashMapCount[letter] + 1;
  }
  let copy = { ...hashMapCount };

  let start = 0;
  for (let i in str.split('')) {
    let letter = str[i];
    if (hashMapCount[letter] == null) {
      start = i+1;
      hashMapCount = { ...copy };
      continue;
    }

    hashMapCount[letter]--;

    while (hashMapCount[letter] < 0) {
      let letter = str[start];
      hashMapCount[letter]++;
      start++;
    }
    if(Object.values(hashMapCount).reduce((res, el)=>res+el,0) === 0) return true;
  }

  return false;
}; // T:(N) S:(1) Kmax 26
