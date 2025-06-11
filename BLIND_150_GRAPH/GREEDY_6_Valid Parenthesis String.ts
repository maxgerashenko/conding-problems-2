// https://leetcode.com/problems/valid-parenthesis-string/description/
//
// Valid Parenthesis String

function checkValidString(str: string): boolean {
  let len = str.length;

  let count = 0;
  let wildCard = 0;
  for (let i = 0; i < len; i++) {
    let el = str[i];
    if (el == '(') count++;
    if (el == ')') count--;
    if (el == '*') wildCard++;

    if (count + wildCard < 0) return false;
  }

  count = 0;
  wildCard = 0;
  for (let i = len - 1; i >= 0; i--) {
    let el = str[i];
    if (el == '(') count--;
    if (el == ')') count++;
    if (el == '*') wildCard++;

    if (count + wildCard < 0) return false;
  }

  return true;
} // T:O(N) S:O(1)
