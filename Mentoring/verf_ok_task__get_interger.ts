/**
  Get integer
  Only the space character ' ' is considered as whitespace character.
  Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 */

const getInterger = (number) => {
  return (number > 2147483647)
    ? 2147483647
    : (number < -2147483648)
      ? -2147483648
      : number;
}

let myAtoi = function (str) {
  ;
  if (/^[a-z]|^\+\-|^\-\+/.test(str) || !/\d/.test(str)) {
    return 0;
  }

  let code = null;
  if (!isNaN(str) && !/e/.test(str)) {
    return getInterger(Number(str));
  }

  // remove wightspases
  code = str.replace(/^\s*/g, '');

  // get first part with number                        
  let match = code.match(/^\+?\-?\d+/g)
  code = match && match[0];

  return getInterger(code);
}
