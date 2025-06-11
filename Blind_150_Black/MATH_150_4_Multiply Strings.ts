// https://leetcode.com/problems/multiply-strings/
// Multiply Strings

// use reversed array
// use % 10
// use res[n1 + n2] = num1 + num2
// remove 0 if it is in the start
// [12, 5, 8, 15 , 12] move 1 to the next
//
// T:O(m*n) S:O(n+m)

function multiply(num1: string, num2: string): string {
  const n1Len = num1.length;
  const n2Len = num2.length;

  let res = new Array(n1Len + n2Len).fill(0);

  if (num1 === '0' || num2 === '0') return '0'; // conner case
  if (num1 === '1' || num2 === '1') return num1 === '1' ? num2 : num1; // conner case

  let num1Arr = num1
    .split('')
    .reverse()
    .map((el) => Number(el));
  let num2Arr = num2
    .split('')
    .reverse()
    .map((el) => Number(el));

  for (let n1 = 0; n1 < num1.length; n1++) {
    for (let n2 = 0; n2 < num2.length; n2++) {
      let n1el = num1Arr[n1];
      let n2el = num2Arr[n2];
      res[n1 + n2] += n1el * n2el;
    }
  }

  let next = 0;
  for (let i = 0; i < res.length; i++) {
    let cur = res[i] + next;
    next = 0;
    res[i] = cur % 10;
    next = Math.floor(cur / 10);
  }
  if (next > 0) res.push(next);

  res = res.reverse();
  if (res[0] === 0) res.shift();
  return res.join('');
} // T:O(NM) S:O(N+M)
