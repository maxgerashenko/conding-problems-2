// https://www.educative.io/courses/grokking-the-coding-interview/g7pBzR12YPl
// Comparing Strings containing Backspaces

// Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

// def backspace_compare(str1, str2):
//   # Compair 2 string with back spaces

//   # use 2 pointers
//   # iterate 2 string backwards
//   # use stack to count backspace
//   # compaire chars

//   # no (
//   # ==, not ===
//   # True

//   p1 = len(str1)-1
//   p2 = len(str2)-1

//   bsCount1 = 0
//   bsCount2 = 0

//   while p1 > 0 or p2 > 0:
//     # remove leters 1
//     while str1[p1] == '#' or bsCount1 > 0:
//       if str1[p1] == '#':
//         bsCount1 += 1
//         p1 -=1
//         continue
//       if bsCount1 > 0:
//         bsCount1 -= 1
//         p1 -=1
//         continue

//     # remove leters 1
//     while str2[p2] == '#' or bsCount2 > 0:
//       if str2[p2] == '#':
//         bsCount2 += 1
//         p2 -=1
//         continue
//       if bsCount2 > 0:
//         bsCount2 -= 1
//         p2 -=1
//         continue

//     if str1[p1] != str2[p2]:
//       return False

//     p1 -=1
//     p2 -=1

//   return True
// O (N + M), N - 1st string 2nd string
