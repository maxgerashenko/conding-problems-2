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

// DP + BT
// cur value is 1 + prev value from the prev range of values
// offset is the distance to the prev Value
// increase of offset is when offset = i*2

function countBits(n: number): number[] {
  let dp = new Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    offset = offset * 2 === i ? i : offset;
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
} // T:O(n) S:O(n)
