// Multiply Strings
//
// https://leetcode.com/problems/multiply-strings/

function multiply(num1: string, num2: string): string {
  let [len1, len2] = [num1, num2].map((arr) => arr.length);
  let [num1Array, num2Array] = [num1, num2].map((arr) =>
    arr
      .split('')
      .map((el) => Number(el))
      .reverse()
  ); // number
  let sums = Array(len1 + len2).fill(0);
  let sumsLen = sums.length;

  for (let j = 0; j < len1; j++)
    for (let i = 0; i < len2; i++) {
      sums[j + i] += num1Array[j] * num2Array[i];
    } // * each position

  let next = 0;
  for (let i = 0; i < sumsLen; i++) {
    let cur = sums[i] + next;
    sums[i] = cur % 10;
    next = ~~(cur / 10);
  } // sum + carrry

  sums.reverse(); // reverse in place
  while (sums.length > 1 && sums[0] === 0) sums.shift(); // remove 0 in front

  return sums.join(''); // string
} // T:O(n*m) S:O(n+m)
