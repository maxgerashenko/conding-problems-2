// https://leetcode.com/problems/reverse-bits/
// Reverse Bits

function reverseBits(num: number, res = 0): number {
  for (let i = 0; i < 32; i++) {
    res <<= 1; // move existing to left
    res |= num & 1; // add last bit
    num >>>= 1; // remove 1 bit from number
  }

  return res >>> 0; // push right add zero to left
} // T:O(1) S:O(1);
