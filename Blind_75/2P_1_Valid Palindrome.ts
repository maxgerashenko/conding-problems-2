//https://leetcode.com/problems/valid-palindrome/

// use simple regexp
// ignore not aphabet with simple regExp
// use 2 pointers from left and right
// return if left !== righ as soon posible

var isPalindrome = function (str) {
  str = str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '');
  for (let index = 0; index < Math.floor(str.length / 2); index++) {
    if (str[index] !== str[str.length - 1 - index]) return false;
  }
  return true;
};

// O(n)

const isNotAphabetic = (str) => str.match(/[^a-zA-Z0-9]/);
isPalindrome = function (str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (isNotAphabetic(str[left])) {
      left++;
      continue;
    }
    if (isNotAphabetic(str[right])) {
      right--;
      continue;
    }
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};

// T:O(1)
