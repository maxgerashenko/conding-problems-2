// Reverse Bits
//
// https://leetcode.com/problems/reverse-bits/description/

// take new bit from n the very right position
// put new bit to res very right pos
function reverseBits(n: number): number {
  let res = 0;

  for (let i = 0; i <= 31; i++) {
    let bit = (n >> i) & 1; // Extract the ith bit from the right
    res |= bit << (31 - i); // Move the bit to its reversed position and set it in the result
  }

  return res >>> 0; // fix negative
} // T:O(1) S:O(1)
