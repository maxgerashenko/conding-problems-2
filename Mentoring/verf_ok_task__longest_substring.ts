/**
 Longest Substring Without Repeating Characters
 Given a string, find the length of the longest substring without repeating characters.

 Example 1:
 Input: "abcabcbb"
 Output: 3
 Explanation: The answer is "abc", with the length of 3.
 **/

/**
 * Returns longest substring.
 *
 * @param {string} paramString
 * @return {number}
 */
const lengthOfLongestSubstring = (inputString) => {
  let characterIndex = 0;
  let substring = '';
  let maxLength = 0;

  while (characterIndex < inputString.length && (inputString.length - characterIndex + substring.length) > maxLength) {
    const index = substring.indexOf(inputString[characterIndex]);

    substring = (index > -1)
      ? substring.slice(index + 1)
      : substring;

    substring = substring + inputString[characterIndex];

    maxLength = (substring.length > maxLength)
      ? substring.length
      : maxLength;
    characterIndex++;
  }

  return maxLength;
};
