// Vol #2 - GOOD 2p to practice indexes and conner casses

// https://leetcode.com/problems/implement-strstr/
// Implement strStr
// Easy

// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not
// part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // when haystack is '' return 0
  // when needle is ''  retirn 0
  // when there is match return -1

  // Constraints
  //  0 <= haystack <= 5*10^4
  // lower-case English letters

  if (needle.length === 0) return 0;
  // Good catch!!!
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    let j;
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
    }
    if (j === needle.length) return i;
  } // O(n^2);

  return -1;
};

// #2 Optimized solution

// Conner casses
// 'aa' '' - easy win // 0
// 'a' 'a' - test algo for single value
// 'hello' 'll' - base case
// 'hlello' 'll' - need to reset the search when after first fail
// 'mississippi' 'issip' - need to reset search index to last postion
//                         to get ovelaped cases

// 0 1 1 1 4
// 0 1 2 3 4 5 6 7 8
// m i s s i s s i p p i
// 0 1 2 3 4 5
// i s s i p

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // Constraints
  // 0 <= haystack.length <= 10^
  // 0 <= needle.length <= 10^

  // If need le is '' alwaus return 0;
  if (needle.length === 0) return 0;

  let last = 0,
    i = 0,
    j = 0;
  while (i < haystack.length) {
    if (haystack[i] === needle[j]) {
      // when 1st match
      if (j === 0) {
        // remember the the last position
        last = i;
      }
      // look to the next symbol
      j++;
    } else {
      // when not match after the match
      if (j > 0) {
        // reset i to last and reset search
        i = last;
        j = 0;
      }
    }
    // when is end of search
    if (j === needle.length) return i - (needle.length - 1);
    i++;
  }

  // if there is no match return -1;
  return -1;
};
