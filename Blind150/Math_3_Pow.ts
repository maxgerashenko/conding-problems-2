// https://leetcode.com/problems/powx-n/
// Pow(x, n)

// binary exponentiation algorithm
//
// Use recursion with n/2
// base case n^0 === 1
// conner case x === 0 return 0
// handle n%2 === 0 ? res*res : res*res*res
// return x * res
// handle n < 0; return n<0 ? 1/res : res
// // T:O(log|n|) S:O(log|n|)

function myPow(x: number, n: number): number {
  if (x === 0) return 0; // conner case

  function half(x, n) {
    if (n === 0) return 1;
    let res = half(x, ~~(n / 2));
    res *= res;
    return n % 2 === 0 ? res : x * res;
  }

  let res = half(x, Math.abs(n));
  return n < 0 ? 1 / res : res;
} // T:O(log|n|) S:O(log|n|)
