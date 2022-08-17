// https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl
// Comparing Strings containing Backspaces

// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

const backspace_compare = function (
  str1,
  str2,
  s1 = str1.length - 1,
  s2 = str2.length - 1
) {
  let backspace = (str, s, count = 0) => {
    while (str[s] === '#' || count > 0) {
      count = str[s] === '#' ? count + 1 : count - 1;
      s--;
    }
    return s;
  };
  while (s1 > 0 || s2 > 0) {
    s1 = backspace(str1, s1);
    s2 = backspace(str2, s2);
    if (str1[s1] !== str2[s2]) return false;
    s1--;
    s2--;
  }
  return true;
}; // T:O(N1+N2) S:O(1)
