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
} // T:O(1) 64bits S:O(1)

// do it 64 times

// skip all 0 in the nuber
// ignore all 0 up to next 1 from the left to right 1 <- 0
// ignore with & operation 1 & 0 == 0
// move to next 1 by -1

function hammingWeight(n: number, count = 0): number {
  while (n != 0) {
    n &= n - 1; // 1 or 0
    count++;
  }
  return count;
} // T:O(1) 1's in the number S:O(1)
