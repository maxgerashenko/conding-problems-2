/**
  Longest Palindromic substring

  Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

  Example 1:
  Input: "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.

  Example 2:
  Input: "cbbd"
  Output: "bb"
 */

const memoizer = {};
/**
 * Checks is palindrome
 * 
 * @param {string} paramString
 * @return {string}
 */
const isPalindrome = (paramString) => {
  if (!paramString) {
    return false;
  }

  if (memoizer[paramString] !== undefined) {
    return memoizer[paramString];
  }

  const stringLength = paramString.length;
  memoizer[paramString] = true;
  for (let i = 0; i < stringLength / 2; i++) {
    if (paramString[i] !== paramString[stringLength - 1 - i]) {
      memoizer[paramString] = false;
      return memoizer[paramString];
    }
  }

  return memoizer[paramString];
};

/**
 * Gets longest string
 * 
 * @param {string} paramString
 * @param {string} longestString
 * @return {string}
 */
const getLongestString = (paramString, longestString) => (paramString.length > longestString.length) ? paramString : longestString;

/**
 * Returns longest palindrome
 * 
 * @param {string} paramString
 * @return {string}
 */
const longestPalindrome = (paramString) => {
  if (!paramString) {
    return paramString;
  }

  let longestPalindrome = paramString[0];
  let length = 2;

  while (length <= 3) {
    for (let index = 0; index <= paramString.length - length; index++) {
      let subString = longestPalindrome;
      let step = 0;

      do {
        longestPalindrome = getLongestString(subString, longestPalindrome);
        let start = index - step;
        let end = index + length + step;
        subString = (index - step >= 0 && end <= paramString.length) ? paramString.substring(start, end) : '';
        step++;
      } while (isPalindrome(subString))
    }

    length++;
  }

  return longestPalindrome;
};
