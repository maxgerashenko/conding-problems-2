// https://leetcode.com/problems/reverse-bits/description/
//
// Reverse Bits

function reverseBits(num: number): number {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    let bit = (num >> i) & 1; // take 1 bit and shit to right
    res = (res << 1) | bit;
  }

  return res >>> 0;
} // T:O(n) S:O(n)
