// use simple regexp

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
