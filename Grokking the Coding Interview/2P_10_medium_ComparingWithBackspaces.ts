// https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl
// Comparing Strings containing Backspaces

// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

const backspace_compare = function (str1, str2) {
  let count = { str1: 0, str2: 0 };
  let i = str1.length - 1;
  let j = str2.length - 1;

  while (i >= 0 && j >= 0) {
    if (str1[i] === '#') {
      count.str1++;
      i--;
      continue;
    }
    if (str2[j] === '#') {
      count.str2++;
      j--;
      continue;
    }
    if (count.str1 > 0) {
      count.str1--;
      i--;
      continue;
    }
    if (count.str2 > 0) {
      count.str2--;
      j--;
      continue;
    }
    if (str1[i] !== str2[j]) return false;
    i--;
    j--;
  }

  return i===j;
}; // T:O(N+M) S:O(1)

