// https://leetcode.com/problems/reverse-integer/description/
//
// Reverse Integer

// fro limit check befoe last digit
// last digit for negative limit and positive should be smaller
function reverse(num: number): number {
  let res = 0;
  let isNegative = num < 0;
  num = Math.abs(num);
  let limit = Math.pow(2, 31);
  let preLim = ~~(limit / 10);
  let lastLim = limit % 10;

  while (num >= 10) {
    let digit = num % 10;
    num = ~~(num / 10);
    res = res * 10 + digit;
    if (res > preLim) return 0; // check before last digit added
  }

  if (
    preLim === res &&
    ((isNegative && num > lastLim) || (!isNegative && num > lastLim - 1))
  )
    return 0;

  res = res * 10 + num;
  return isNegative ? -1 * res : res;
} // T:O(1) S:O(1)
