// https://leetcode.com/problems/powx-n/
// Pow

// think as continius of computations
// to short it twice use binary search method
// conner case 0^2
// base case x^0 === 1
// base case x^1 === x
// for -1 return 1/res
// to count return res x * 1 line

// efective
function myPow(x: number, n: number): number {
  let original = n;
  n = Math.abs(n);
  if (x === 0) return 0; // conner case

  function half(n) {
    if (n === 0) return 1;
    let res = half(~~(n / 2));
    return n % 2 === 0 ? res * res : x * res * res;
  }

  let res = half(n);
  return original < 0 ? 1 / res : res;
} // T:O(logN) S:O(logN)

function myPow(x: number, n: number): number {
  let pow = x;
  let original = n;
  n = Math.abs(n);

  if (n === 0) return 1; // conner case

  while (n > 1) {
    pow *= x;
    n--;
  }

  return original < 0 ? 1 / pow : pow;
} // T:O(n-1) S:(1)
