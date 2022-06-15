// https://leetcode.com/problems/sequential-digits/
// Sequential Digits

// https://www.youtube.com/watch?v=sFt3KVGyeWw
// Using a window of '123456789'

//https://github.com/luliyucoordinate/Leetcode/blob/master/src/1291-Sequential-Digits/1291.java
// Using the % for digits

// SMART SOLUTION

// constraints
// 10 <= low <= high <= 10^9

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
  const seqDigits = "123456789",
    nLow = low.toString().length,
    nHigh = high.toString().length,
    res = [];

  for (let n = nLow; n <= nHigh; n++) {
    // O(1..9)
    for (let i = 0; i < seqDigits.length - n + 1; i++) {
      let subStr = seqDigits.slice(i, i + n);
      let num = Number(subStr);
      if (num >= low && num <= high) {
        res.push(num);
      }
    } // O(n)
  } // O(n)

  return res;
}; // O(n)
