// Number of 1 Bits
// https://stackblitz.com/edit/conding-problems-oajgfe?file=README.md,Blind75%2FBit_1_.ts

// >> vs >>>
// -4 >> 1 === 1...01 -2
// -4 >>> 1 ===  01....01

// %2 checks only the last Element
// >>> makes prev as last

function hammingWeight(n: number, count = 0): number {
  while (n != 0) {
    count += n % 2; // 1 or 0
    n >>>= 1;
  }
  return count;
} // T:O(N) S:O(1)
