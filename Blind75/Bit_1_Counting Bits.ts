// Counting Bits
// https://leetcode.com/problems/counting-bits/

function countBits(n: number): number[] {
  let res = [];
  for (let i = n; i >= 0; i--) {
    let num = i;
    let count = 0;
    while (num != 0) {
      count += num % 2; // 1 or 0
      num >>>= 1;
    }
    res.unshift(count);
  }
  return res;
} // T:O(nlogn) n all elements, and log n as can / 2 for the each check
