// https://leetcode.com/problems/reverse-integer/
// Reverse Integer

// use product and remainder
// take num digit with remainder %10
// update num with product ~~(/10)
// use while until num != 0
// the isssue is with number that are not ok when reversed
// how to check outbound numbers with out storing them
// check product, if it is bigget it is out
// or if product === res but remainder is >
//
// T:O(1) S:O(1)

function reverse(num: number): number {
  const max = Math.pow(2, 31) - 1;
  const min = -1 * Math.pow(2, 31);
  let res = 0;

  while (num) {
    let digit = num % 10;
    num = ~~(num / 10);

    let maxRemainder = max % 10;
    let maxProduct = ~~(max / 10);
    let minRemainder = min % 10;
    let minProduct = ~~(min / 10);

    if (
      res > maxProduct ||
      res < minProduct ||
      (res == maxProduct && digit > maxRemainder) ||
      (res == minProduct && digit < minRemainder)
    )
      return 0;

    res = res * 10 + digit;
  }

  return res;
} // T:O(1) S:O(1)
