// https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl
// Comparing Strings containing Backspaces

// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

const backspace_compare = function (
  str1,
  str2,
  s1,
  s2,
  end1 = str1.length - 1,
  end2 = str2.length - 1
) {
  const clear = (str, index, count = 0) => {
    while (count > 0 || str[index] == '#') {
      count = str[index] == '#' ? count + 1 : count - 1;
      index--;
    }
    return index;
  };
  while (end1 >= 0 && end2 >= 0) {
    end1 = clear(str1, end1);
    end2 = clear(str2, end2);
    if (str1[end1] !== str2[end2]) return false;
    end1--;
    end2--;
  }
  return true;
}; // T:O(M+N) S:O(1)
