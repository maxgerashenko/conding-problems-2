// https://leetcode.com/problems/reverse-integer/
// Reverse Integer

// use Math.pow(2,31)
// use x%10
// use ~~(x/10) integer devision
// use res = res*10 + value % 10
// T:O(1) S:O(1)

var reverse = function (value) {
  let MIN = -1 * Math.pow(2, 31);
  let MAX = Math.pow(2, 31) - 1;
  let res = 0;

  while (value) {
    let tmp = value % 10;
    value = ~~(value / 10);
    res = res * 10 + tmp;
  }

  return res < MIN || res > MAX ? 0 : res;
}; // T:O(1) S:O(1)
