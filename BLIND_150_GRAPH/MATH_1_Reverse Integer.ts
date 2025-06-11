// https://leetcode.com/problems/reverse-integer/description/
//
// Reverse Integer

function reverse(num: number): number {
  const lim = Math.pow(2, 31);
  const isNegative = num < 0;
  let res = 0;
  let preLim = ~~(lim / 10);
  let lastLim = lim % 10;

  num = Math.abs(num);

  while (num >= 10) {
    let digit = num % 10;
    num = ~~(num / 10);
    res = res * 10 + digit; // update number

    if (res > preLim) return 0;
  }

  if (
    res === preLim &&
    ((isNegative && num > lastLim) || (!isNegative && num > lastLim - 1))
  )
    return 0;

  res = res * 10 + num;
  return isNegative ? -1 * res : res;
} // T:O(1) S:O(1)
