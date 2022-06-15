console.clear();

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

let cach = {};
function fibMem(n) {
  if (n < 2) return n;
  if (cach[n] == null) {
    cach[n] = fibMem(n - 1) + fibMem(n - 2);
  }
  return cach[n];
}

function fibTab(n) {
  if (n < 2) return n;
  let arr = [, 1, 1];
  let tmp = 3;
  while (tmp <= n) {
    arr[tmp] = arr[tmp - 1] + arr[tmp - 2];
    tmp++;
  }
  return arr[n];
}

let str = "",
  min = 35,
  max = 40,
  tmp = min;
console.log("FIBONACY");
console.log("--- NAIVE");

// check it out how slow it is
while (tmp < max) {
  fib(tmp);
  str += ` ${tmp}`;
  console.log(str);
  tmp += 1;
}

console.log("--- MEMOIZATION");
tmp = min;
str = "";
while (tmp < max) {
  fibMem(tmp);
  str += ` ${tmp}`;
  console.log(str);
  tmp += 1;
}

console.log("--- TABULATED");
tmp = min;
str = "";
while (tmp < max) {
  fibTab(tmp);
  str += ` ${tmp}`;
  console.log(str);
  tmp += 1;
}
console.log("naive", fib(35));
console.log("memoize", fibMem(35));
console.log("tabulated", fibTab(35));

// JS is bad for the big numbers
fibTab(100);
// But it works with Tab because we don't take too space
fibTab(100000);
// and here is the problem with recursion
// Maximum call stack size exceeded
fibMem(100000);
