// https://leetcode.com/problems/multiply-strings/
// Multiply Strings

// use math
// for for and res[i+j]
// res.length = i+j
// user reversed order
// use x % 10
// use ~~(x / 10)
//
// i+j += i+j
// i+j+1 += ~~(x / 10)
// i+j = i+j % 10
// remove 0 from the beggining
// return reversed order
// T:(n*m) S:O(n+m)

var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';
  if (num1 === '1') return num2;
  if (num2 === '1') return num1;

  num1 = num1
    .split('')
    .reverse()
    .map((el) => Number(el));
  num2 = num2
    .split('')
    .reverse()
    .map((el) => Number(el));
  let n1 = num1.length;
  let n2 = num2.length;
  let res = Array(n1 + n2).fill(0);

  for (let i1 = 0; i1 < n1; i1++)
    for (let i2 = 0; i2 < n2; i2++) {
      let tmp = num1[i1] * num2[i2];
      res[i1 + i2] += tmp;
      res[i1 + i2 + 1] += ~~(res[i1 + i2] / 10);
      res[i1 + i2] = res[i1 + i2] % 10;
    }
  res = res.reverse();
  while (res[0] === 0) res = res.slice(1);

  return res.join('');
}; // T:O(n*m) S:O(n+m)
