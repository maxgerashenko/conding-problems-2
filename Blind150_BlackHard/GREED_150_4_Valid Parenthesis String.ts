// Valid Parenthesis String
//
// https://leetcode.com/problems/valid-parenthesis-string/description/

function checkValidString(str: string): boolean {
  let len = str.length;
  let positiveMin = 0;
  let max = 0;

  for (let i = 0; i < len; i++) {
    let el = str[i];

    switch (el) {
      case '(':
        positiveMin++;
        max++;
        break;
      case ')':
        positiveMin--;
        max--;
        break;
      case '*':
        positiveMin--;
        max++;
        break;
    }
    if (max < 0) return false; // base case )**
    if (positiveMin < 0) positiveMin = 0; // reset negative min
  }

  return positiveMin === 0;
} // T:O(n) S:O(1)
