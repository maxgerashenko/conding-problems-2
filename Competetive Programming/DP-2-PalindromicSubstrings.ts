// #1

// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

//https://www.geeksforgeeks.org/overlapping-subproblems-property-in-dynamic-programming-dp-1/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let res = 0;

  let isPalindromFromTheMiddle = (start, end) => {
    // grow from the middle
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      res++;
      end++;
      start--;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // aba case
    isPalindromFromTheMiddle(i, i);
    // aa case
    isPalindromFromTheMiddle(i, i + 1);
  }

  return res;
};
