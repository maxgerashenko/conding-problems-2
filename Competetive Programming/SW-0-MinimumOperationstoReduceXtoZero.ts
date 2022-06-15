// Minimum Operations to Reduce X to Zero
// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  // Constraints
  // 1<=s<= 10000
  // 1<=k<=s.length

  // Algorithm

  // take a substring of the length k
  // count the valves in the substring length k start 0;
  // move the window to the right
  // decrement by one if the start is a vowel
  // increment by on if the end is a vowel
  // set max value if cur is bigger then max
  // return max

  // init the window
  let max = 0;
  for (let i = 0; i < k; i++) {
    if (/[a,e,i,o,u]/.test(s[i])) max++;
  } // O(n)

  // move window & update max val
  let cur = max,
    start = 0,
    end = k;
  while (end < s.length) {
    if (/[a,e,i,o,u]/.test(s[start])) cur--;
    start++;
    if (/[a,e,i,o,u]/.test(s[end])) cur++;
    end++;
    max = Math.max(cur, max);
  } // O(n)

  return max;
}; // O(n)
