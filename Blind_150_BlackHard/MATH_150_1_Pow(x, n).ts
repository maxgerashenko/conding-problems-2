// Pow(x, n)
//
// https://leetcode.com/problems/powx-n/description/

// instaed of 2*2*2*2 caclucate half and then multiply it
function myPow(x: number, n: number): number {
  function helper(x, n) {
    if (n === 0) return 1; // base case
    if (n === 1) return x; // base case

    let res = helper(x, ~~(n / 2));
    return n % 2 == 1 ? x * res * res : res * res;
  }

  let res = helper(x, Math.abs(n));
  return n < 0 ? 1 / res : res;
} // T:O(logn) S:O(1)
