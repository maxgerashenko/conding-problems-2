// https://leetcode.com/problems/powx-n/description/
//
// Pow(x, n)

// split in half
// isNegative
// isEven
function myPow(x: number, n: number): number {
  const isNegative = n < 0;
  n = ~~n;

  function helper(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    let isEven = n % 2 === 0;

    let res = helper(x, ~~(n / 2));
    return isEven ? res * res : res * res * x;
  }

  let res = helper(x, n);
  return isNegative ? 1 / res : res;
} // T:O(logN) S:O(1)
