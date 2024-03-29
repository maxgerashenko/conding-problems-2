//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// use sliding window
// use hashMapIndex
// left jump to index

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  if (str.length === 0) return 0;
  let map = {};
  let maxLength = 1;
  let left = 0;
  map[str[left]] = left;
  for (let right = 1; right < str.length; right++) {
    const char = str[right];
    if (left <= map[char]) {
      left = map[char] + 1;
    }
    map[char] = right;
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

// T:(O)N S:O(N)
