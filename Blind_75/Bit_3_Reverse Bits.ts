// Reverse Bits
// https://leetcode.com/problems/reverse-bits/

function reverseBits(n) {
  if (!n) return 0;
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res = res * 2 + (n & 1); // shift res to left and last el of N
    n >>>= 1; // decrease N by one
  }
  return res;
} // T:O(n) S:O(1)
